import { scalePortrait } from 'utils/responsive';

export const DEFAULT_PREFIX_FONT_FAMILY = 'OpenSans-Regular';
const DEFAULT_FONT_FAMILY = 'OpenSans-';

// size constants
// export const FONT_SIZE_CONST = {
//   SMALL: 'SMALL',
//   NORMAL: 'NORMAL',
//   FIT: 'FIT',
//   LARGE: 'LARGE',
// };

// fontsize
// export const FONT_SIZE = {
//   SMALL: scalePortrait(12),
//   NORMAL: scalePortrait(14),
//   FIT: scalePortrait(16),
//   LARGE: scalePortrait(18),
//   X_LARGE: scalePortrait(24),
// };

// fontFamily
// export const FONT_FAMILY = {
//   REGULAR: `${DEFAULT_PREFIX_FONT_FAMILY}`,
//   BOLD: `${DEFAULT_PREFIX_FONT_FAMILY}Bold`,
//   SEMIBOLD: `${DEFAULT_PREFIX_FONT_FAMILY}SemiBold`,
//   ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}Italic`,
//   BLACK: `${DEFAULT_PREFIX_FONT_FAMILY}Black`,
//   LIGHT: `${DEFAULT_PREFIX_FONT_FAMILY}Light`,
//   MEDIUM: `${DEFAULT_PREFIX_FONT_FAMILY}Medium`,
// };

export const FONT_FAMILY = {
  REGULAR: `${DEFAULT_FONT_FAMILY}Regular`,
  BOLD: `${DEFAULT_FONT_FAMILY}Bold`,
  SEMIBOLD: `${DEFAULT_FONT_FAMILY}SemiBold`,
  ITALIC: `${DEFAULT_FONT_FAMILY}Italic`,
  LIGHT: `${DEFAULT_FONT_FAMILY}Light`,
  MEDIUM: `${DEFAULT_FONT_FAMILY}Medium`,
};

export default {
  FONT_FAMILY,
  // FONT_SIZE,
  // FONT_SIZE_CONST,
};
