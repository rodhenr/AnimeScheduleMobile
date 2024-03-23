import { render } from "@testing-library/react-native";
import { NextEpisodeProps } from "./Index.types";
import { NextEpisode } from "./NextEpisode";

describe("NextEpisode", () => {
  const mockProps: NextEpisodeProps = {
    airingAt: "",
    episode: 0,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<NextEpisode {...mockProps} />);
    expect(getByTestId("nextEpisode")).toBeTruthy();
  });
});
