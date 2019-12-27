import React from 'react';
import { getTime } from '../helpers/date';
import { WiSunrise, WiSunset } from 'react-icons/wi';

const SunTracker = ({ sunrise, sunset }) => (
  <div className="sun-details">
    <div className="sun-time">
      <WiSunrise size="30" color="gold" /> {getTime(sunrise)}
    </div>
    <div className="sun-time">
      <WiSunset size="30" color="orange" /> {getTime(sunset)}
    </div>
  </div>
);

export default SunTracker;
