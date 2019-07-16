import React from 'react';
import { getTime, isNightTime, getSunPosition } from '../helpers/date';

const SunTracker = ({ sunrise, sunset }) => (
  <div className="sun-details">
    <span>Sunrise: {getTime(sunrise)}</span>
    <div className="sun-tracker">
      <div className="sun-marker" role="img" aria-label="sunrise" style={{ left: getSunPosition(sunrise) }}></div>
      <span
        className="sun"
        role="img"
        aria-label={isNightTime(sunset) ? 'moon' : 'sun'}
        style={{ left: getSunPosition('now') }}
      >
        {isNightTime(sunset) ? '🌙' : '☀️'}
      </span>
      <div className="sun-marker" role="img" aria-label="sunset" style={{ left: getSunPosition(sunset) }}></div>
    </div>
    <span>Sunset: {getTime(sunset)}</span>
  </div>
);

export default SunTracker;
