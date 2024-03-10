import { IColors } from "../interfaces/interfaces";

const followColors = {
  backgroundFollowing: "#1fb542",
  backgroundNotFollowing: "#db3e3e",
};

export const lightColors: IColors = {
  text: "black",
  background: "#e1e1e1",
  backgroundSecondary: "#FFF",
  backgroundCard: "rgba(0,0,0,0.7)",
  ...followColors,
};

export const darkColors: IColors = {
  text: "white",
  background: "#4b4b4b",
  backgroundSecondary: "#1E1E1E",
  backgroundCard: "rgba(0,0,0,0.7)",
  ...followColors,
};
