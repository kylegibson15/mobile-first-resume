import React from 'react';

function PhoneFrame() {
  return (
    <div style={{ height: '500px', width: '300px' }}>
      <div style={{ padding: '65px 10px', backgroundColor: '#222', borderRadius: '50px', border: '3px solid lightgrey' }}>
        <iframe src='https://kylegibson15.github.io/my-vacation-home' height='468' width='280' style={{ border: 'none' }} />
      </div>
    </div>
  );
}

export default PhoneFrame;
