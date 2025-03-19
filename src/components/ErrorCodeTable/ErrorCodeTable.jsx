import React from 'react';
import "./ErrorCodeTable.scss";

const ErrorCodeTable = ({ codes }) => {
  return (
    <div className="error-code-table">
      <div className="th">
        <div className="td">HTTP Code</div>
        <div className="td">Description</div>
      </div>

      {codes.map((item, index) => (
        <div className="tr" key={index}>
          <div className="td">
            <span className="code">{item.code}</span>
          </div>
          <div className="td">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ErrorCodeTable;
