import { render } from "@testing-library/react-native";
import { FilterProps } from "./Index.types";
import { Filter } from "./Index";

describe("Filter", () => {
  const mockProps: FilterProps = {
    onClick: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Filter {...mockProps} />);
    expect(getByTestId("filter")).toBeTruthy();
  });
});
