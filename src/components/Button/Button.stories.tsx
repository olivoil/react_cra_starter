import * as React from 'react';
import 'src/bootstrap';
import { storiesOf } from '@storybook/react';
import { makeStyles } from '@material-ui/styles';
import { action } from '@storybook/addon-actions';
import Button, { Variant, Color } from './Button';
import { Grid, Typography } from '@material-ui/core';
import { select, text, boolean } from '@storybook/addon-knobs';

storiesOf('Button', module)
  .add('buttons', () => {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        minHeight: '100%',
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.background.default
      }
    }));

    const Page = () => {
      const classes = useStyles();

      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography variant="body2">Primary Colors</Typography>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={action('button clicked')}>Default</Button>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={action('button clicked')} variant="text">
                Text
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={action('button clicked')} variant="outlined">
                Outlined
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2">Secondary Colors</Typography>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={action('button clicked')} color="secondary">
                Default
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={action('button clicked')}
                color="secondary"
                variant="text"
              >
                Text
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={action('button clicked')}
                color="secondary"
                variant="outlined"
              >
                Outlined
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    };

    return <Page />;
  })
  .add('button with knobs', () => (
    <Button
      onClick={action('button clicked')}
      color={select('color', ['primary', 'secondary'], 'primary') as Color}
      variant={
        select(
          'variant',
          ['contained', 'text', 'outlined'],
          'contained'
        ) as Variant
      }
      disabled={boolean('disabled', false)}
      disableFocusRipple={boolean('disable focus ripple', false)}
      disableRipple={boolean('disable ripple', false)}
      fullWidth={boolean('full width', false)}
      href={text('href', null)}
      mini={boolean('mini', false)}
      size={
        select('size', ['small', 'medium', 'large'], 'medium') as
          | 'small'
          | 'medium'
          | 'large'
      }
    >
      OK
    </Button>
  ));
