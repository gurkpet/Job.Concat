import React from 'react';

export default (Wrapped, data) => {
  return props => {
    return (
      <React.Fragment>
        {data.map((entry, index) => (
          <div key={index}>
            <label>{entry.text}: </label>
            <Wrapped name={entry.name} checked={props.analytics.name} onChange={props.handleCheck} />
          </div>
        ))}
      </React.Fragment>
    );
  };
};
{
  /* <div>
<label>Recruiter: </label>
<input
  type="text"
  name="recruiter"
  value={this.state.recruiter}
  onChange={this.handleChange.bind(this)}
  onKeyUp={e => this.handleEnter(e, this.createNewJob.bind(this))}
/>
</div> */
}
