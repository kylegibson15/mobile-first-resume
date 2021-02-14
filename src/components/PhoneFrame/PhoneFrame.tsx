import React from 'react';

import useStyles from './styles';

function PhoneFrame(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.frame}>
        <iframe src={'https://kylegibson15.github.io/my-vacation-home'} height='468' width='280' style={{ border: 'none' }} />
      </div>
    </div>
  );
}

export default PhoneFrame;
