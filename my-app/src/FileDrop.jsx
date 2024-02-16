import React, { useState } from 'react';
import './FileDrop.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const FileDrop = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="file-drop-container">
      <h4>Select a manifest you'd like to import</h4>
      {/* dropzone goes here */}

      <div className="elapsed-data-container">
        <span>Elapse Data Checking</span>
        <span className="dates">No Elapsed Dates!</span>
      </div>
      <br />
      <div className="tolerance-window">
        <span className="switch-label">Tolerance Window:</span>
        <div className="switch-container">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={() => setIsChecked(isChecked ? false : true)}
                />
              }
              label={isChecked ? 'Toggle ON' : 'Toggle OFF'}
            ></FormControlLabel>
          </FormGroup>
          <div className="tolerance">Select Tolerance Level</div>
        </div>
      </div>
    </div>
  );
};
export default FileDrop;
