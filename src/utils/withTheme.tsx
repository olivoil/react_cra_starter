import * as React from 'react';
import { oc } from 'ts-optchain';
import {
  ThemeProvider /*, install as installStyles*/
} from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useQuery } from 'react-apollo-hooks';
import light from 'src/themes/light.json';
import dark from 'src/themes/dark.json';
import { GET_THEME } from 'src/graphql/theme/queries';
import { ThemeOptions, Theme } from '@material-ui/core/styles/createMuiTheme';

const themes: { [name: string]: Theme } = {
  light: createMuiTheme(light.mui as ThemeOptions),
  dark: createMuiTheme(dark.mui as ThemeOptions)
};

function withTheme<P>(Component: React.ComponentType<P>) {
  return (props: P & { theme?: string }) => {
    let theme: string | undefined = props.theme;

    if (!theme) {
      const { data } = useQuery<{ theme?: { id: string } }>(GET_THEME);
      theme = oc(data).theme.id();
    }

    return (
      <ThemeProvider theme={themes[theme || 'light']}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };
}

export default withTheme;
