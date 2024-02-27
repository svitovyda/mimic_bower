export interface Version {
  number: string;
  published_at: string; // "2013-03-19T19:18:31.208Z"
  spdx_expression: string;
  original_license: string;
}

export interface Package {
  name: string;
  description: string;
  stars: number;
  rank: number;
  contributions_count: number;
  forks: number;
  dependent_repos_count: number;
  dependents_count: number;
  homepage: string;
  repository_url: string;
  owner?: string;
  versions: Version[];
}
