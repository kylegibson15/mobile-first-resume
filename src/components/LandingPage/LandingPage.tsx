import React, { useState } from 'react';

import { Mode } from './interfaces';
import useStyles from './styles';

function LandingPage() {
  const [mode, setMode] = useState(Mode.Dark);
  const styles = useStyles(mode);
  return (
    <div style={styles.container}>
      <div style={{ height: '90vh', width: '90vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4em' }}>

          <div>
            <h1 style={styles.name}>KYLE GIBSON</h1>
            <h4 style={styles.job_title}>SOFTWARE ENGINEER</h4>
          </div>

        </div>
        <button onClick={() => setMode(mode === Mode.Dark ? Mode.Light : Mode.Dark)}>{mode === Mode.Dark ? Mode.Light : Mode.Dark}</button>
      </div>
    </div>
  )
};

export default LandingPage;
