import React, { useState, createRef } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dropzone from 'react-dropzone';
import { CiClock1 } from 'react-icons/ci';
import { FaFileAlt } from 'react-icons/fa';
import Switch from '@mui/material/Switch';
import './FileDrop.scss';

const FileDrop = ({ setUploadedFiles }) => {
  const [isChecked, setIsChecked] = useState(true);
  const dropzoneRef = createRef();
  const openBrowse = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };
  return (
    <div className="file-drop-container">
      <div className="border" />
      <div className="drop-zone-wrapper">
        <div>
          <strong>Select a manifest you'd like to import</strong>
        </div>
        <Dropzone
          ref={dropzoneRef}
          onDrop={(acceptedFiles) => {
            setUploadedFiles(acceptedFiles);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <section className="dropzone-section">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <FaFileAlt size={25} color="orange" />
                <p>Drag & Drop Here Or Browse</p>
              </div>
              <div className="dropzone-btn-container">
                <button className="modal-btn-dropzone" onClick={openBrowse}>
                  Upload Manifest
                </button>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
      <div className="elapsed-data-container">
        <div className="border" />
        <span>
          <strong>Elapse Data Checking</strong>
        </span>

        <span className="dates">No Elapsed Dates!</span>
      </div>
      <div className="tolerance-window">
        <div className="border" />
        <span>
          <strong>Tolerance Window:</strong>
        </span>
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
          <div className="tolerance-container">
            <CiClock1 size={23} />
            <div className="tolerance">Select Tolerance Level</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FileDrop;
