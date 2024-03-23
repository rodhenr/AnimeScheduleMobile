import { render } from "@testing-library/react-native";
import { EpisodeInfoProps } from "../Index.types";
import { EpisodeInfo } from "./Index";

describe("EpisodeInfo", () => {
  const mockProps: EpisodeInfoProps = {
    airingAt: new Date(),
    episode: 1,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<EpisodeInfo {...mockProps} />);
    expect(getByTestId("episodeInfo")).toBeTruthy();
  });
});
