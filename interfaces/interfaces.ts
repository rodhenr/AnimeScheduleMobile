export interface IApiData {
  mediaId: number;
  episode: number;
  airingAt: Date;
  media: IMedia;
}

export interface IMedia {
  url: string;
  titles: ITitles;
  coverImages: ICoverImages;
  format: string;
  type: string;
}

interface ITitles {
  romaji: string;
  english: string;
}

interface ICoverImages {
  extraLarge: string;
}
