import { render } from "@testing-library/react-native";
import { ItemGroupProps } from "../Index.types";
import { ItemGroup } from "./ItemGroup";

describe("ItemGroup", () => {
  const mockProps: ItemGroupProps = {
    name: "",
    options: [],
    allowMultipleSelection: false,
    updateOption: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<ItemGroup {...mockProps} />);
    expect(getByTestId("itemGroup")).toBeTruthy();
  });
});
