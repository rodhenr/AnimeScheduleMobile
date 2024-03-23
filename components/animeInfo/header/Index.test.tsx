import { render } from "@testing-library/react-native";
import { Header } from "./Index";
import { HeaderProps } from "./Index.types";

describe("Header", () => {
  const mockProps: HeaderProps = {
    countryOfOrigin: "JP",
    cover: "",
    id: 0,
    name: "",
    nextEpisodeInfo: null,
    score: 0,
    titles: { english: "", romaji: "" },
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Header {...mockProps} />);
    expect(getByTestId("header")).toBeTruthy();
  });
});
