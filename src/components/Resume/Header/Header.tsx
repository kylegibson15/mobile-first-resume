import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { useIntl } from 'react-intl';

import logo from '../../../images/sea-foam.png';

import useStyles from './styles';
import { ICustomTheme } from '../../../theme';
import { messages } from '../../../translations';

function Header() {
  const intl = useIntl();
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles(trigger);

  return (
    <div className={classes.container}>
      <img alt='kyle gibson website logo' src={logo} height='150' width='85' />
      <div className={classes.nameLinksContainer}>
        <div className={classes.nameLocation}>
          <h1 className={classes.name}>KYLE GIBSON</h1>
          <h4 className={classes.margin5}>Denver, CO</h4>
        </div>
        <div className={classes.links}>
          <a className={classes.link} href='https://www.linkedin.com/in/kylegibson15/' target='_blank' rel='noreferrer'>
            <FiLinkedin />
            <h4 className={classes.margin5}>/in/kylegibson15</h4>
          </a>

          <a className={classes.link} href='https://github.com/kylegibson15' target='_blank' rel='noreferrer'>
            <FiGithub />
            <h4 className={classes.margin5}>/kylegibson15</h4>
          </a>

          <h4 className={classes.title}>{intl.formatMessage(messages.job_title)}</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
