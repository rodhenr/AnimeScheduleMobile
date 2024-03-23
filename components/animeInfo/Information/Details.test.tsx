import { render } from "@testing-library/react-native";
import { DetailsProps } from "./Index.types";
import { Details } from "./Details";

describe("Details", () => {
  const mockProps: DetailsProps = {
    endDate: null,
    episodes: 0,
    season: "",
    seasonYear: 0,
    source: "",
    startDate: "",
    status: "",
    type: "",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Details {...mockProps} />);
    expect(getByTestId("details")).toBeTruthy();
  });
});
