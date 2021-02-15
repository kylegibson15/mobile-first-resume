import React from 'react';
import { Container, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import QRCode from '../../images/QRCode.png';
import { PhoneFrame } from '../PhoneFrame';

import useStyles from './styles';

function MVH() {
  const classes = useStyles();
  return (
    <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'row' }}>
      <PhoneFrame />

      <Paper elevation={3} style={{ margin: '15px' }}>
        <Grid className={classes.mvhTextContainer} container item direction='column' justify='space-between'>
          <Typography variant='h4'>My Vacation Home</Typography>
          <Grid className={classes.mvhWhiteText} item xs>
            <h6 className={classes.mvhZeroMargin}>TypeScript, React, React Router, Framer Motion, Redux, Github Pages, Material UI</h6>
            <p>
              I built My Vacation Home as an information website for my home in Winter Park, CO. You can visit the site via&nbsp;
              <a className={classes.mvhLink} href='https://kylegibson15.github.io/my-vacation-home/' target='_blank' rel='noreferrer'>
                here
              </a>
              &nbsp;or by scanning the QR code below.
            </p>
          </Grid>
          <Grid container item direction='row' justify='space-between' alignItems='flex-end'>
            <img src={QRCode} width='100' />
            <IconButton href='https://github.com/kylegibson15/my-vacation-home' target='_blank'>
              <GitHub fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default MVH;
