import React from 'react';
import IncSelect from '../Core/IncSelect/IncSelect';
import { CiClock1 } from 'react-icons/ci';
import './ClientSelect.scss';

const ClientSelect = () => {
  const mockClients = ['Dave', 'Bill', 'Tom', 'John'];
  const mockTestingCenters = [
    'Testing Center 1',
    'Testing Center 2',
    'Testing Center 3',
    'Testing Center 4',
  ];
  return (
    <div className="client-select-container">
      <div>
        <div>
          <strong>Split schedule using social distancing?</strong>
        </div>
        <div className="radio-container">
          <div className="radio-wrapper">
            <input type="radio" name="split-schedule-radio" />
            <label>Yes</label>
          </div>
          <div>
            <input type="radio" name="split-schedule-radio" />
            <label>No</label>
          </div>
        </div>
      </div>
      <div className="border-right" />
      <div>
        <div>
          <strong>Location Checking:</strong>
        </div>
        <div className="green">All Available!</div>
      </div>
      <div className="border-right" />
      <div>
        <strong>Client:</strong>
      </div>
      <div className="radio-container">
        <div className="radio-wrapper">
          <input type="radio" name="client-radio" />
          <label>Single</label>
        </div>
        <div>
          <input type="radio" name="client-radio" />
          <label>Multiple</label>
        </div>
      </div>

      <div className="testing-center-container">
        <div className="testing-center-wrapper">
          {mockTestingCenters.map((x, key) => {
            return (
              <div key={key} className="testing-center-selects">
                <span>{x}</span>
                <div>
                  <IncSelect data={mockClients} placeholder="Select Client" />
                  <CiClock1 size={23} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ClientSelect;
