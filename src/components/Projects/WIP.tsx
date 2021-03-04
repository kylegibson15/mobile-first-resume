import React from 'react';
import { Container, Grid, IconButton, Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import useStyles from './styles';
import { ICustomTheme } from '../../theme';
import wipImage from '../../images/under-construction_geek_man_01.svg';

function WIP() {
  const theme: ICustomTheme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container maxWidth='md'>
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <img src={wipImage} width={isDesktop ? '230' : '100'} alt='under-construction' style={{ margin: theme.spacing(1) }} />
        <Grid className={classes.mvhTextContainer} container direction='column' justify='space-between'>
          <Typography variant='h4'>Work In Progress</Typography>
          {`
          I'm working on adding my other projects to this website.
          In the meantime you can see some of them that are availble on my GitHub
          `}
          <Grid container item justify='flex-end'>
            <Grid item>
              <IconButton href='https://github.com/g64-sleuth' target='_blank'>
                <GitHub fontSize='large' />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default WIP;
