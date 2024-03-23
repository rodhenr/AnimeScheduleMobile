import { render } from "@testing-library/react-native";
import { CloseIconProps } from "../Index.types";
import { CloseIcon } from "./CloseIcon";

describe("CloseButton", () => {
  const mockProps: CloseIconProps = {
    onClick: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<CloseIcon {...mockProps} />);
    expect(getByTestId("closeButton")).toBeTruthy();
  });
});
