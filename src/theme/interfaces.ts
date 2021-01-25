interface IPaletteMode {
  main: string;
  [key: string]: any;
}

export interface ITheme {
  palette: {
    dark: IPaletteMode;
    light: IPaletteMode;
  };
}
