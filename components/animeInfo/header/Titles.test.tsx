import { render } from "@testing-library/react-native";
import { Titles } from "./Titles";
import { TitlesProps } from "./Index.types";

describe("Titles", () => {
  const mockProps: TitlesProps = {
    titles: { english: "", romaji: "" },
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Titles {...mockProps} />);
    expect(getByTestId("titles")).toBeTruthy();
  });
});
