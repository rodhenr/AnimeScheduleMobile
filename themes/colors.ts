export type ColorsType = {
  text: string;
  textActive: string;
  background: string;
  backgroundSecondary: string;
  backgroundCard: string;
  backgroundCardText: string;
  backgroundFollowing: string;
  backgroundNotFollowing: string;
  disabled: string;
};

const followColors = {
  backgroundFollowing: "#2e8817",
  backgroundNotFollowing: "#db3e3e",
};

export const lightColors: ColorsType = {
  text: "black",
  textActive: "black",
  background: "#e1e1e1",
  backgroundSecondary: "#FFF",
  backgroundCard: "rgba(0,0,0,0.7)",
  backgroundCardText: "#FFF",
  disabled: "#888888",
  ...followColors,
};

export const darkColors: ColorsType = {
  text: "#dddddd",
  textActive: "#dddddd",
  background: "#363636",
  backgroundSecondary: "#1E1E1E",
  backgroundCard: "rgba(0,0,0,0.8)",
  backgroundCardText: "#dddddd",
  disabled: "#888888",
  ...followColors,
};
