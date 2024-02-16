import React, { useState } from 'react';
import FileDrop from './FileDrop';
import './UploadModal.css';

const mockSelectOptions = ['mock', 'data'];

const UploadModal = () => {
  return (
    <div className="modal">
      <div className="content">
        <div className="modal-title-container">
          <button className="modal-close-btn">X</button>
          <h1 className="modal-title">Document Upload</h1>
        </div>

        <div className="import-container">
          <select>
            <option hidden>Select Import Name:</option>
            {mockSelectOptions.map((x) => {
              return <option value={x}>{x}</option>;
            })}
          </select>
          {/* <div className="border" /> */}
          <FileDrop />
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
