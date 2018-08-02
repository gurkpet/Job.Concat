import React from 'react';
import MarketingBox from './LandingPageComponents/MarketingBox.jsx';

var LandingPage = props => (
  <div className="landing">
    <span>{'We organize your job search so you don\'t have to!'}</span>
    <ul className="landing-marketing">
      <MarketingBox
        heading={"Manage Relationships"}
        text={"Keep track of all the contacts you have made in your job search"} 
        img={'./img/head1.svg'} 
      />
      <MarketingBox 
        heading={"Track Progress"}
        text={"Maintain the status of all the application stages you are in"} 
        img={'./img/cog.svg'} />
      <MarketingBox
        heading={"Reminders"}
        text={"Get reminders for follow-ups and other application time related concerns"} 
        img={'./img/clock.svg'} 
      />
      <MarketingBox
        heading={"Insights"}
        text={"Get statistical insights about what is and isn't working for you"} 
        img={'./img/bulb.svg'} 
      />
    </ul>
  </div>
)

export default LandingPage;