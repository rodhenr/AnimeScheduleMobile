import { render } from "@testing-library/react-native";
import { InfoContainerProps } from "./Index.types";
import { InfoContainer } from "./Index";

describe("InfoContainer", () => {
  const mockProps: InfoContainerProps = {
    children: null,
    title: "",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<InfoContainer {...mockProps} />);
    expect(getByTestId("infoContainer")).toBeTruthy();
  });
});
