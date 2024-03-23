import { render } from "@testing-library/react-native";
import { ClearButton } from "./Index";
import { ClearButtonProps } from "./Index.types";

describe("ClearButton", () => {
  const mockProps: ClearButtonProps = {
    removeAll: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<ClearButton {...mockProps} />);
    expect(getByTestId("clearButton")).toBeTruthy();
  });
});
