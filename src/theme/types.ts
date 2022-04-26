export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;

  toggleBg: string;
  sidebarSelectedBg: string;
  sidebarSelectedColor: string;
  sidebarColor: string;
  venom1: string;
  venom2: string;
  tresdin: string;
  rogue1: string;
  rogue2: string;
  rogue3: string;
  rogue4: string;
  rogue5: string;
  rogue6: string;
  rogue7: string;
  phantom: string;

  logoTextColor: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  themeSwitcherColor: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
