import { render } from "@testing-library/react-native";
import { defaultModalOptions } from "../../common/defaultModalData";
import { HomeContainer } from "./Index";
import { HomeContainerProps } from "./Index.types";

jest.mock("../card/Index", () => ({
  AnimeCard: jest.fn(() => null),
}));

describe("HomeContainer", () => {
  const mockProps: HomeContainerProps = {
    scheduleData: [],
    followedAnimes: [],
    modalOptions: defaultModalOptions,
  };

  it("renders correctly", () => {
    const { getByTestId } = render(<HomeContainer {...mockProps} />);
    expect(getByTestId("cardsContainer")).toBeTruthy();
  });
});
