import { render } from "@testing-library/react-native";
import { Information } from "./Index";
import { InformationProps } from "./Index.types";

describe("Information", () => {
  const mockProps: InformationProps = {
    description: "",
    endDate: null,
    episodes: 0,
    season: "",
    seasonYear: 0,
    source: "",
    startDate: "",
    status: "",
    type: "",
    genres: [],
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Information {...mockProps} />);
    expect(getByTestId("information")).toBeTruthy();
  });
});
