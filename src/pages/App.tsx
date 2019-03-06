import React, { FC } from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation } from 'react-apollo-hooks';
import logo from 'src/logo.svg';
import { GET_THEME } from 'src/graphql/theme/queries';
import { SET_THEME } from 'src/graphql/theme/mutations';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
    //color: 'white'
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '40vmin',
    pointerEvents: 'none'
  },
  link: {
    color: '#61dafb'
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
}));

const App: FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const setTheme = useMutation(SET_THEME);
  const getTheme = useQuery(GET_THEME);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography variant="body2">
          {t('pages.home.description.part1')}
        </Typography>
        <a
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('pages.home.title')}
        </a>
        <Typography variant="body2">
          {t('pages.home.description.part2')}
        </Typography>

        <Button
          disabled={i18n.language === 'es'}
          onClick={() => i18n.changeLanguage('es')}
        >
          es
        </Button>
        <Button
          disabled={i18n.language === 'fr'}
          onClick={() => i18n.changeLanguage('fr')}
        >
          fr
        </Button>
        <Button
          disabled={i18n.language === 'en'}
          onClick={() => i18n.changeLanguage('en')}
        >
          en
        </Button>

        <Typography variant="body2">
          {t('pages.home.description.part3')}
        </Typography>
        <Button
          disabled={getTheme.data.theme.id === 'light'}
          onClick={() => setTheme({ variables: { id: 'light' } })}
        >
          light
        </Button>
        <Button
          disabled={getTheme.data.theme.id === 'dark'}
          onClick={() => setTheme({ variables: { id: 'dark' } })}
        >
          dark
        </Button>
      </header>
    </div>
  );
};

export default App;
