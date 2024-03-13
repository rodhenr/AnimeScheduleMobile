import { IColors } from "../interfaces/interfaces";

const followColors = {
  backgroundFollowing: "#2e8817",
  backgroundNotFollowing: "#db3e3e",
};

export const lightColors: IColors = {
  text: "black",
  background: "#e1e1e1",
  backgroundSecondary: "#FFF",
  backgroundCard: "rgba(0,0,0,0.7)",
  backgroundCardText: "#FFF",
  ...followColors,
};

export const darkColors: IColors = {
  text: "#dddddd",
  background: "#363636",
  backgroundSecondary: "#1E1E1E",
  backgroundCard: "rgba(0,0,0,0.8)",
  backgroundCardText: "#dddddd",
  ...followColors,
};
