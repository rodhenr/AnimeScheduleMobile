import { render } from "@testing-library/react-native";
import { Item } from "./Item";
import { ItemProps } from "../Index.types";

describe("Item", () => {
  const mockProps: ItemProps = {
    name: "",
    option: "",
    allowMultipleSelection: false,
    isSelected: false,
    updateOption: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Item {...mockProps} />);
    expect(getByTestId("item")).toBeTruthy();
  });
});
