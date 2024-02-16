import React from 'react';
import './IncSelect.scss';

const IncSelect = ({ data, placeholder }) => {
  return (
    <div className="inc-select-wrapper">
      <select className="inc-select">
        <option hidden>{placeholder}</option>
        {data?.map((names, key) => {
          return <option key={key}>{names}</option>;
        })}
      </select>
    </div>
  );
};

export default IncSelect;
