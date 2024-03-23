import { render } from "@testing-library/react-native";
import { InfoItemProps } from "./Index.types";
import { InfoItem } from "./Index";

describe("InfoItem", () => {
  const mockProps: InfoItemProps = {
    info: null,
    title: "",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<InfoItem {...mockProps} />);
    expect(getByTestId("infoItem")).toBeTruthy();
  });
});
