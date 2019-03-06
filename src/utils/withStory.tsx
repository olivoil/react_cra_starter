import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import light from 'src/themes/light.json';
import dark from 'src/themes/dark.json';
import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/styles';

const themes: { [name: string]: Theme } = {
  light: createMuiTheme(light.mui as ThemeOptions),
  dark: createMuiTheme(dark.mui as ThemeOptions)
};

export default function(storyFn: any) {
  const theme = select('Theme', ['light', 'dark'], 'light');

  return (
    <ThemeProvider theme={themes[theme || 'light']}>
      <CssBaseline />
      {storyFn()}
    </ThemeProvider>
  );
}

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
