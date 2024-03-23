import { render } from "@testing-library/react-native";
import { SelectorIcon } from "./Index";
import { SelectorIconProps } from "../Index.types";
import { DateActionType } from "../../../utils/dateUtils";

describe("SelectorIcon", () => {
  const mockProps: SelectorIconProps = {
    iconName: "chevron-left",
    updateDate: () => null,
    type: DateActionType.Decrement,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<SelectorIcon {...mockProps} />);
    expect(getByTestId("selectorIcon")).toBeTruthy();
  });
});
