jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("./context/ThemeContext", () => ({
  useTheme: jest.fn(() => ({
    colors: {
      text: "white",
      textActive: "white",
      background: "white",
      backgroundSecondary: "white",
      backgroundCard: "white",
      backgroundCardText: "white",
      backgroundFollowing: "white",
      backgroundNotFollowing: "white",
    },
  })),
}));

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
