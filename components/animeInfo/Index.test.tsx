import { render } from "@testing-library/react-native";
import { AnimeInfo } from "./Index";
import { AnimeInfoProps } from "./Index.types";

describe("AnimeInfo", () => {
  const mockProps: AnimeInfoProps = {
    data: {
      id: 0,
      idMal: 0,
      source: "",
      siteUrl: "",
      title: { english: "", romaji: "" },
      coverImage: "",
      format: "",
      type: "",
      countryOfOrigin: "JP",
      status: "",
      description: "",
      averageScore: 0,
      season: "",
      seasonYear: 0,
      episodes: 0,
      startDate: "",
      endDate: null,
      genres: [],
      nextAiringEpisode: null,
    },
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<AnimeInfo {...mockProps} />);
    expect(getByTestId("animeInfo")).toBeTruthy();
  });
});
