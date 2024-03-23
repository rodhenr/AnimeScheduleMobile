import { render } from "@testing-library/react-native";
import { DateSelectorProps } from "./Index.types";
import { DateSelector } from "./Index";

describe("DateSelector", () => {
  const mockProps: DateSelectorProps = {
    updateDate: () => null,
    date: new Date(),
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<DateSelector {...mockProps} />);
    expect(getByTestId("dateSelector")).toBeTruthy();
  });
});
