import { render } from "@testing-library/react-native";
import { FlagProps } from "./Index.types";
import { Flag } from "./Flag";

describe("Flag", () => {
  const mockProps: FlagProps = {
    flagName: "JP",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Flag {...mockProps} />);
    expect(getByTestId("flag")).toBeTruthy();
  });
});
