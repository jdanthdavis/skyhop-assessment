import React, { useState } from 'react';
import FileDrop from '../DragNDrop/FileDrop';
import ClientSelect from '../ClientSelect/ClientSelect';
import './UploadModal.scss';

const UploadModal = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  return (
    <div className="modal">
      <div className="content">
        <div className="modal-title-container">
          <button
            className="modal-close-btn"
            onClick={() => console.log('Close button clicked')}
          >
            X
          </button>
          <div className="modal-title-wrapper">
            <h1 className="modal-title">Document Upload</h1>
          </div>
        </div>
        <div className="main-container">
          <div className="import-container">
            <select>
              <option hidden>Select Import Name:</option>
              {uploadedFiles.map((x, key) => {
                return (
                  <option key={key} value={x?.name}>
                    {x?.name}
                  </option>
                );
              })}
            </select>
            <FileDrop
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
            />
          </div>

          <ClientSelect />
        </div>
        <div className="modal-footer">
          <div>
            <strong>
              Data in the import file is correct. Please press Continue to
              import.
            </strong>
          </div>
          <div className="modal-btn-wrapper">
            <div className="modal-btn-container">
              <button
                className="modal-btn"
                onClick={() => console.log('Continue clicked')}
              >
                Continue Import
              </button>
              <button
                className="modal-btn-cancel"
                onClick={() => console.log('Cancel clicked')}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
