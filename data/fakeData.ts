import { IApiData } from "../interfaces/interfaces";

export const fakeData: IApiData[] = [
  {
    mediaId: 166610,
    episode: 8,
    airingAt: new Date("2024-03-02T14:30:00Z"),
    media: {
      url: "https://anilist.co/anime/166610",
      titles: {
        romaji: "MASHLE: Kami Shinkakusha Kouho Senbatsu Shiken-hen",
        english: "MASHLE: MAGIC AND MUSCLES Season 2",
      },
      coverImages: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166610-IjJ8YLOKsua4.jpg",
      },
      format: "TV",
      type: "ANIME",
    },
  },
  {
    mediaId: 151807,
    episode: 8,
    airingAt: new Date("2024-03-02T15:00:00Z"),
    media: {
      url: "https://anilist.co/anime/151807",
      titles: {
        romaji: "Ore dake Level Up na Ken",
        english: "Solo Leveling",
      },
      coverImages: {
        extraLarge:
          "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwfIsLu.png",
      },
      format: "TV",
      type: "ANIME",
    },
  },
];
