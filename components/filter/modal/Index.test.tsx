import { render } from "@testing-library/react-native";
import { FilterModalProps } from "../Index.types";
import { FilterModal } from "./Index";

describe("FilterModal", () => {
  const mockProps: FilterModalProps = {
    onClick: () => null,
    options: [],
    updateOption: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<FilterModal {...mockProps} />);
    expect(getByTestId("filterModal")).toBeTruthy();
  });
});
