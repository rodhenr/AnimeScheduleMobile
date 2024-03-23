import { render } from "@testing-library/react-native";
import { HomeOptions } from "./Index";
import { HomeOptionsProps } from "./Index.types";

jest.mock("../../dateSelector/Index", () => ({
  DateSelector: jest.fn(() => null),
}));

jest.mock("../../filter/Index", () => ({
  Filter: jest.fn(() => null),
}));

describe("HomeOptions", () => {
  const mockProps: HomeOptionsProps = {
    changeFilterModalState: () => null,
    date: null,
    setDate: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<HomeOptions {...mockProps} />);
    expect(getByTestId("homeOptions")).toBeTruthy();
  });
});
