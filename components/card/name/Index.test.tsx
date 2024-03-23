import { render } from "@testing-library/react-native";
import { NameInfoProps } from "../Index.types";
import { NameInfo } from "./Index";

describe("NameInfo", () => {
  const mockProps: NameInfoProps = {
    englishName: "",
    romajiName: "",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<NameInfo {...mockProps} />);
    expect(getByTestId("nameInfo")).toBeTruthy();
  });
});
