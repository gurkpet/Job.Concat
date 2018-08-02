import React from 'react';

var MarketingBox = props => (
  <li>
    <div>
      {<img src={props.img} alt={"thumb"} height={100} witdh={100} />}
    </div>
    <div className="marketing-summary">
      {props.heading}
    </div>
    <div className="marketing-text">
      {props.text}
    </div>
  </li>
)

export default MarketingBox;