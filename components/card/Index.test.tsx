import { render } from "@testing-library/react-native";
import { AnimeCard } from "./Index";
import { AnimeCardProps } from "./Index.types";

describe("AnimeCard", () => {
  const mockProps: AnimeCardProps = {
    data: {
      mediaId: 0,
      episode: 0,
      airingAt: "",
      media: {
        siteUrl: "",
        title: { english: "", romaji: "" },
        coverImage: "",
        format: "",
        type: "",
        countryOfOrigin: "JP",
      },
    },
    isFollowing: false,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<AnimeCard {...mockProps} />);
    expect(getByTestId("animeCard")).toBeTruthy();
  });
});
