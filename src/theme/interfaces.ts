import { Theme, ThemeOptions } from '@material-ui/core';
import { Palette, TypeText, PaletteColor } from '@material-ui/core/styles/createPalette';

interface ICustomTextType extends TypeText {
  accent_1: string;
  accent_2: string;
  accent_3: string;
  accent_4: string;
  shadow_1: string;
}

interface ICustomPaletteColor extends PaletteColor {
  accent: string;
}

interface ICustomPalette extends Palette {
  primary: ICustomPaletteColor;
  text: ICustomTextType;
}

export interface ICustomTheme extends Theme {
  palette: ICustomPalette;
}

export interface ICustomThemeOptions extends ThemeOptions {
  palette: ICustomPalette;
}
