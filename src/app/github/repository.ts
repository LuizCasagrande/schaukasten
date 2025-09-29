export interface Repository {
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  isFork: boolean;
  languages: Language[];
}

export interface Language {
  name: string;
  color: string;
}

export function toRepository(response: any): Repository[] {
  return response.data.viewer.pinnedItems.nodes
    .map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      homepageUrl: repo.homepageUrl,
      url: repo.url,
      isFork: repo.isFork,
      languages: repo.languages.nodes
        .map((language: any) => ({
          name: language.name,
          color: language.color
        })),
    }));
}
