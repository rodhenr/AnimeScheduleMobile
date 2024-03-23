import { render } from "@testing-library/react-native";
import { FollowButton } from "./FollowButton";
import { FollowButtonProps } from "./Index.types";

describe("FollowButton", () => {
  const mockProps: FollowButtonProps = {
    animeId: 0,
    animeName: "",
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<FollowButton {...mockProps} />);
    expect(getByTestId("followButton")).toBeTruthy();
  });
});
