import type { Package } from '../models/Package';
import configJson from 'config';

export type SortType =
  | 'rank'
  | 'stars'
  | 'dependents_count'
  | 'dependent_repos_count'
  | 'latest_release_published_at'
  | 'contributions_count'
  | 'created_at';

export class ApiService {
  private static BASE_URL = configJson.baseUrl;

  static async searchBowerModules(query: string, sortBy?: SortType): Promise<Package[]> {
    try {
      const response = await fetch(
        `https://${this.BASE_URL}/api/search?q=${encodeURIComponent(query)}&api_key=${process.env.LIBRARIES_API_KEY}${sortBy ? `&sort=${sortBy}` : ''}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch data', error);
      throw error;
    }
  }
}
