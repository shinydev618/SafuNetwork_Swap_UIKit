import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3AC125",
    
  primaryBright: "lightgreen",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  toggleBg: "#F1F1F1",
  sidebarSelectedBg: "#3AC125",
  sidebarSelectedColor: "#FFFFFF",
  sidebarColor: "#A4A5A6",

  venom1  : "#3AC125",
  venom2  : "#1DC872",
  tresdin : "#461B00",

  //Sven's color
  rogue1  : "#07162d",
  rogue2  : "#4877BC",
  rogue3  : "#508be0",
  rogue4  : "#6781a8",
  rogue5  : "#C8D4E6",
  rogue6  : "#E5EAF2",
  rogue7  : "#708db7",

  phantom: "#869AB8",
};
export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  logoTextColor: "#461B00",
  themeSwitcherColor: "#3F8CFF",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  logoTextColor: "#FFFFFF",
  themeSwitcherColor: "#FFFFFF",
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#1B2A4E",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
