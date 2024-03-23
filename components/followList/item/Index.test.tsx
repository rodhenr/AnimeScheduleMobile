import { render } from "@testing-library/react-native";
import { AnimeItem } from "./Index";
import { AnimeItemProps } from "./Index.types";

describe("FollowListItem", () => {
  const mockProps: AnimeItemProps = {
    id: 1,
    name: "Anime1",
    remove: () => null,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<AnimeItem {...mockProps} />);
    expect(getByTestId("followItemContainer")).toBeTruthy();
  });
});
