import React from 'react';
import { getTime, getRelativeTime } from '../helpers/date';
import { WiSunrise, WiSunset } from 'react-icons/wi';

const SunTracker = ({ sunrise, sunset }) => (
  <div className="sun-details">
    <div className="sun-time">
      <WiSunrise size="30" color="gold" /> {getTime(sunrise)}
      <p>{getRelativeTime(sunrise)}</p>
    </div>
    <div className="sun-time">
      <WiSunset size="30" color="orange" /> {getTime(sunset)}
      <p>{getRelativeTime(sunset)}</p>
    </div>
  </div>
);

export default SunTracker;
