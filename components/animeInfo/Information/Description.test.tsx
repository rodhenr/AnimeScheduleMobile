import { render } from "@testing-library/react-native";
import { DescriptionProps } from "./Index.types";
import { Description } from "./Description";

describe("Description", () => {
  const mockProps: DescriptionProps = {
    description: "",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<Description {...mockProps} />);
    expect(getByTestId("description")).toBeTruthy();
  });
});
