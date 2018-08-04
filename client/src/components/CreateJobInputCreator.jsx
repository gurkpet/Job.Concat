import React from 'react';

export default data => {
  return props => {
    return (
      <React.Fragment>
        {data.map((entry, index) => (
          <div key={index}>
            <label>{entry.text}: </label>
            <input type={entry.type} name={entry.name} checked={props.analytics.name} onChange={props.handleCheck} />
          </div>
        ))}
      </React.Fragment>
    );
  };
};
