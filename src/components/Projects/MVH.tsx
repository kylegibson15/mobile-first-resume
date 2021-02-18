import React from 'react';
import { Container, Grid, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import { useIntl } from 'react-intl';

import QRCode from '../../images/QRCode.png';
import { PhoneFrame } from '../PhoneFrame';

import useStyles from './styles';
import { ICustomTheme } from '../../theme';
import { messages } from '../../translations';

function MVH() {
  const theme: ICustomTheme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'row', paddingTop: isDesktop ? undefined : theme.spacing(8) }}>
      {isDesktop ? <PhoneFrame /> : null}

      <Paper elevation={3} style={{ margin: isDesktop ? theme.spacing(3) : undefined }}>
        <Grid className={classes.mvhTextContainer} container item direction='column' justify='space-between'>
          <Typography variant='h4'>My Vacation Home</Typography>
          <Grid className={classes.mvhWhiteText} item xs>
            <h6 className={classes.mvhZeroMargin}>TypeScript, React, React Router, Framer Motion, Redux, Github Pages, Material UI</h6>
            <p>
              {intl.formatMessage(messages.mvh_paragraph_one, {
                link: (
                  <a className={classes.mvhLink} href='https://kylegibson15.github.io/my-vacation-home/' target='_blank' rel='noreferrer'>
                    {intl.formatMessage(messages.mvh_here_link)}
                  </a>
                ),
              })}
            </p>
            <p>{intl.formatMessage(messages.mvh_paragraph_two)}</p>
            <p>{intl.formatMessage(messages.mvh_paragraph_three)}</p>
            <p>{intl.formatMessage(messages.mvh_best_on_mobile)}</p>
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
