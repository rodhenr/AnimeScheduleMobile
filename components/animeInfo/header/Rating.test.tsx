import { render } from "@testing-library/react-native";
import { RatingProps } from "./Index.types";
import { Rating } from "./Rating";

describe("Rating", () => {
  const mockProps: RatingProps = {
    score: 0,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Rating {...mockProps} />);
    expect(getByTestId("rating")).toBeTruthy();
  });
});
