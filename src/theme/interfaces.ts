import { Theme, ThemeOptions } from '@material-ui/core';
import { Palette, TypeText, TypeBackground, PaletteColor } from '@material-ui/core/styles/createPalette';

interface ICustomTextType extends TypeText {
  accent_1: string;
  accent_2: string;
  accent_3: string;
  accent_4: string;
  paragraph: string;
  shadow_1: string;
}

interface ICustomPaletteColor extends PaletteColor {
  accent: string;
  seafoam: string;
}

interface ICustomBackground extends TypeBackground {
  main: string;
}

interface ICustomPalette extends Palette {
  background: ICustomBackground;
  primary: ICustomPaletteColor;
  text: ICustomTextType;
}

export interface ICustomTheme extends Theme {
  palette: ICustomPalette;
}

export interface ICustomThemeOptions extends ThemeOptions {
  palette: ICustomPalette;
}
