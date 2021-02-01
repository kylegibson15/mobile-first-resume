import React from 'react';
import { useTheme } from '@material-ui/core';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../../images/sea-foam.png';
import { ICustomTheme } from '../../../theme';

import useStyles from './styles';

function Header() {
  const theme: ICustomTheme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={logo} height='150' width='85' />
      <div className={classes.nameLinksContainer}>
        <div className={classes.nameLocation}>
          <h1 className={classes.name}>KYLE GIBSON</h1>
          <h4 className={classes.margin5}>Denver, CO</h4>
        </div>
        <div className={classes.links}>
          <Link className={classes.link} to='https://github.com/kylegibson15'>
            <FiLinkedin />
            <h4 className={classes.margin5}>/in/kylegibson15</h4>
          </Link>

          <Link className={classes.link} to='https://www.linkedin.com/in/kylegibson15/'>
            <FiGithub />
            <h4 className={classes.margin5}>/kylegibson15</h4>
          </Link>

          <h4 className={classes.title}>Software Engineer</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
