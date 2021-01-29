import * as createPalette from '@material-ui/core/styles/createPalette';
declare module '@material-ui/core/styles/createPalette' {
  interface IconPaletteColorOptions {
    pdf?: string;
    csv?: string;
  }

  interface IconPaletteColor {
    pdf: string;
    csv: string;
  }

  interface PaletteOptions {
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
  }

  interface Palette {
    success: PaletteColor;
    warning: PaletteColor;
    icon: IconPaletteColor;
  }
}
