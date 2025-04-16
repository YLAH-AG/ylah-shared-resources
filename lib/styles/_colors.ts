// TODO: remove old branding when all subtasks from YLH-3524 are done
const oldBranding = {
  // Primary & Secondary Colors
  blue100: "#0D546E",
  blue90: "#2E6780",
  blue80: "#4c788f",
  blue70: "#62899d",
  blue60: "#799aab",
  blue50: "#8faab9",
  blue40: "#a5bbc7",
  blue30: "#bcccd5",
  blue20: "#d2dde3",
  blue10: "#e9eef1",
  blue7: "#f4f7f8",
  blueExtraDark: "#01293A",
  blueChipDarkBlue: "#004157",

  mintMain: "#E9EEF1",
  mintBackground: "#F9FBFB",
  mintMedium: "#F4F7F8",
  mintVeryLight: "#F9FBFB",

  // Semantic Color
  semanticOrange: "#FFC857",
  semanticOrangeLight: "#FFF4DD",
  semanticRed: "#E5323B",
  semanticRedLight: "#FEF5F5",
  semanticRedDarkText: "#A21A21",
  semanticExtraDarkRed: "#891E23",

  semanticGreenLight: "#E6ECE3",
  semanticGreen: "#349E02",
  semanticGreenDark: "#2B621B",

  // Achromatic
  achromaticOffWhite: "#FEFEFE",
  achromaticOffBlack: "#1C1D1D",

  achromaticGrey100: "#4F4F4F",
  achromaticGrey80: "#828282",
  achromaticGrey60: "#D0D1D2",
  achromaticGrey50: "#E0E0E0",
  achromaticGrey30: "#EBEBEB",
  achromaticGrey20: "#F2F2F2",
  achromaticGrey10: "#FAFBFC",

  // Off-grays
  offGraysDark: "#4C5657",
  offGraysMediumWcag: "#4E595A",
  offGraysNavigation: "#5C7379",
  offGraysLightIcons: "#809294",

  // Evaluation
  evaluationMainRed8: "#c47472",
  evaluationMainPurple6: "#968491",
  evaluationLightBlue: "#CEDBF2",
  evaluationMainBlue4: "#778c9d",
  evaluationlightGreen: "#d8e7b9",
  evaluationMainGreen2: "#adcc9c",

  // Outline
  outlineOrange: "#AD883B",
};

const baseColors = {
  white: "#FFF",
  black: "#000",
  transparent: "#00000000",
};

const colorCodes = {
  petrol1300: "#001e2b",
  petrol1200: "#01293a",
  petrol1100: "#004157",
  petrol1000: "#0d546e",
  petrol900: "#2e6780",
  petrol800: "#4c788f",
  petrol700: "#62899d",
  petrol600: "#799aab",
  petrol500: "#a5bbc7",
  petrol400: "#bcccd5",
  petrol300: "#d2dde3",
  petrol200: "#e9eef1",
  petrol100: "#f4f7f8",
  petrol50: "#f9fbfb",

  achromatic1300: "#1c1d1d",
  achromatic1200: "#363737",
  achromatic1100: "#4f4f4f",
  achromatic1000: "#636363",
  achromatic900: "#6b6b6b",
  achromatic800: "#747474",
  achromatic700: "#828282",
  achromatic600: "#888888",
  achromatic500: "#919191",
  achromatic400: "#d0d1d2",
  achromatic300: "#e0e0e0",
  achromatic200: "#ebebeb",
  achromatic100: "#f2f2f2",
  achromatic50: "#fefefe",

  tinted1300: "#191d1f",
  tinted1200: "#3f484e",
  tinted1100: "#4c5657",
  tinted1000: "#4e595a",
  tinted900: "#505f62",
  tinted800: "#53676c",
  tinted700: "#5c7379",
  tinted600: "#7b8b8d",
  tinted500: "#809294",
  tinted400: "#95a3a5",
  tinted300: "#b0b9bb",
  tinted200: "#ced4d5",
  tinted100: "#e7eaea",
  tinted50: "#f3f4f4",

  hellblau1300: "#001029",
  hellblau1200: "#00233d",
  hellblau1100: "#123b68",
  hellblau1000: "#2c5082",
  hellblau900: "#385d8f",
  hellblau800: "#5175aa",
  hellblau700: "#6C90C6",
  hellblau600: "#83a8e0",
  hellblau500: "#99c4ff",
  hellblau400: "#cbe1ff",
  hellblau300: "#dfedff",
  hellblau200: "#f0f6ff",
  hellblau100: "#f8fbff",
  hellblau50: "#fcfdff",

  himbeer1300: "#230104",
  himbeer1200: "#2b0004",
  himbeer1100: "#54000d",
  himbeer1000: "#712226",
  himbeer900: "#ae4549",
  himbeer800: "#da5f64",
  himbeer700: "#f16165",
  himbeer600: "#ff8889",
  himbeer500: "#ffa3a2",
  himbeer400: "#ffc3c0",
  himbeer300: "#ffedea",
  himbeer200: "#fef5f5",
  himbeer100: "#fffcfc",
  himbeer50: "#fffdfd",

  creme1300: "#151003",
  creme1200: "#231b07",
  creme1100: "#453620",
  creme1000: "#52442f",
  creme900: "#6b5c45",
  creme800: "#85745c",
  creme700: "#a08d74",
  creme600: "#bda78d",
  creme500: "#d1bda1",
  creme400: "#e0d3c0",
  creme300: "#e8dfd1",
  creme200: "#f1ece3",
  creme100: "#fbf9f7",
  creme50: "#fffefe",

  orange1300: "#332300",
  orange1200: "#5d4200",
  orange1100: "#b8891a",
  orange1000: "#d79e22",
  orange900: "#f6b32a",
  orange800: "#f9be43",
  orange700: "#ffc857",
  orange600: "#ffd177",
  orange500: "#ffdea4",
  orange400: "#ffe6b7",
  orange300: "#feedc8",
  orange200: "#fff4dd",
  orange100: "#fff8eb",
  orange50: "#fffefc",

  green1300: "#021400",
  green1200: "#042100",
  green1100: "#113709",
  green1000: "#2b621b",
  green900: "#4e7d3e",
  green800: "#719761",
  green700: "#90b47f",
  green600: "#adcc9c",
  green500: "#c0d8a9",
  green400: "#d8e7b9",
  green300: "#e0ecc6",
  green200: "#edf4df",
  green100: "#fbfdf8",
  green50: "#fefefc",
};

const colorAliases = {
  // Brand
  colorBrandBoldest: colorCodes.petrol1200,
  colorBrandBold: colorCodes.petrol1000,

  // Accent
  colorAccentBold: colorCodes.hellblau500,
  colorAccentMedium: colorCodes.hellblau400,
  colorAccentSubtle: colorCodes.hellblau300,

  // Text
  colorTextBrandBoldest: colorCodes.petrol1200,
  colorTextBrandBold: colorCodes.petrol1000,
  colorTextBoldest: colorCodes.achromatic1300,
  colorTextBold: colorCodes.tinted1100,
  colorTextMedium: colorCodes.tinted1000,
  colorTextSubtle: colorCodes.tinted800,
  colorTextSubtlest: colorCodes.tinted700,
  colorTextInactiveBold: colorCodes.achromatic1000,
  colorTextInactiveMedium: colorCodes.achromatic900,
  colorTextInactiveSubtle: colorCodes.achromatic800,
  colorTextInverse: colorCodes.achromatic50,
  colorTextSuccessInverse: colorCodes.hellblau1000,
  colorTextDangerBold: colorCodes.himbeer1000,

  // Icon
  colorIconMedium: colorCodes.tinted1000,
  colorIconSubtle: colorCodes.tinted600,
  colorIconSubtlest: colorCodes.tinted500,
  colorIconInverse: colorCodes.achromatic50,

  // Background
  colorBackgroundBold: colorCodes.petrol300,
  colorBackgroundMedium: colorCodes.petrol200,
  colorBackgroundSubtle: colorCodes.petrol100,
  colorBackgroundSubtlest: colorCodes.petrol50,
  colorBackgroundInactiveMedium: colorCodes.achromatic300,
  colorBackgroundInactiveSubtle: colorCodes.achromatic200,
  colorBackgroundInactiveSubtlest: colorCodes.achromatic100,

  // Chart
  colorChartSequential10: colorCodes.himbeer800,
  colorChartSequential9: colorCodes.himbeer700,
  colorChartSequential8: colorCodes.himbeer600,
  colorChartSequential7: colorCodes.himbeer500,
  colorChartSequential6: colorCodes.himbeer400,
  colorChartSequential5: colorCodes.petrol600,
  colorChartSequential4: colorCodes.petrol500,
  colorChartSequential3: colorCodes.green700,
  colorChartSequential2: colorCodes.green600,
  colorChartSequential1: colorCodes.green400,

  // Outline
  colorOutlineDivider: colorCodes.tinted100,
  colorOutlineNavigation: colorCodes.petrol400,
  colorOutlineTinted: colorCodes.tinted600,
  colorOutlineCreme: colorCodes.creme800,
  colorOutlineInputSubtle: colorCodes.tinted500,
  colorOutlineInputSubtlest: colorCodes.tinted200,

  // Success
  colorSuccessBold: colorCodes.hellblau500,
  colorSuccessMedium: colorCodes.hellblau400,
  colorSuccessSubtle: colorCodes.hellblau300,

  // Warning
  colorWarningBolder: colorCodes.orange500,
  colorWarningBold: colorCodes.orange400,
  colorWarningMedium: colorCodes.orange300,
  colorWarningSubtle: colorCodes.orange200,

  //Danger
  colorDangerBoldest: colorCodes.himbeer1100,
  colorDangerBold: colorCodes.himbeer1000,
  colorDangerMedium: colorCodes.himbeer900,
  colorDangerSubtle: colorCodes.himbeer200,
};

const colors = {
  ...baseColors,
  ...oldBranding,
  ...colorCodes,
  ...colorAliases,
} as const;

export default colors;
