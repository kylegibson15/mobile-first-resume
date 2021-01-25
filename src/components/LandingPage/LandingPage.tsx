import React, { useState } from 'react';

import { Mode } from './interfaces';
import useStyles from './styles';

function LandingPage() {
  const [mode, setMode] = useState(Mode.Dark);
  const styles = useStyles(mode);
  return (
    <div style={{ ...styles.container, flexDirection: 'column' }}>
      <div style={{ width: '90vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4em' }}>

          <div>
            <h1 style={styles.name}>KYLE GIBSON</h1>
            <h4 style={styles.job_title}>SOFTWARE ENGINEER</h4>
          </div>

        </div>
        <button onClick={() => setMode(mode === Mode.Dark ? Mode.Light : Mode.Dark)}>{mode === Mode.Dark ? Mode.Light : Mode.Dark}</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p style={{ color: '#ea5455', marginRight: '13px' }}>Creative.</p>
        <p style={{ color: '#ffd460', marginRight: '13px' }}>Motivated.</p>
        <p style={{ marginRight: '13px' }}>Persistent.</p>
        <p style={{ color: '#f07b3f', marginRight: '13px' }}>Focused.</p>
      </div>
      <div>
        Resume
      </div>
    </div>
  )
};

export default LandingPage;
