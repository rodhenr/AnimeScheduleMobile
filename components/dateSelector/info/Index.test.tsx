import { render } from "@testing-library/react-native";
import { DateInfoProps } from "../Index.types";
import { DateInfo } from "./Index";

describe("DateInfo", () => {
  const mockProps: DateInfoProps = {
    date: new Date(),
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<DateInfo {...mockProps} />);
    expect(getByTestId("dateInfo")).toBeTruthy();
  });
});
