import type { Package } from "../models/Package";
import configJson from "config";

export class ApiService {
  private static BASE_URL = configJson.baseUrl;

  static async searchBowerModules(query: string): Promise<Package[]> {
    try {
      const response = await fetch(
        `https://${this.BASE_URL}/api/search?q=${encodeURIComponent(query)}&api_key=${process.env.LIBRARIES_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
