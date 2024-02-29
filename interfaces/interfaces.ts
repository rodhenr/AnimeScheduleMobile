export interface IApiData {
  id: number;
  title: ITitles;
  coverImage: string;
  episodes: number;
  siteUrl: string;
  externalLinks: IExternalLinks[];
  airingSchedule: IAiringSchedule[];
}

interface ITitles {
  romaji: string;
  english: string;
}

export interface IExternalLinks {
  site: string;
  url: string;
}

interface IAiringSchedule {
  airingAt: string;
  episode: number;
}
