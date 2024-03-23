import { render } from "@testing-library/react-native";
import { GenresProps } from "./Index.types";
import Genres from "./Genres";

describe("Genres", () => {
  const mockProps: GenresProps = {
    genres: [],
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Genres {...mockProps} />);
    expect(getByTestId("genres")).toBeTruthy();
  });
});
