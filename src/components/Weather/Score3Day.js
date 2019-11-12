import React from "react";
import Score from './Score'
import classesWeather from "./WeatherContent.css";

const score3day = props => (
  <div className={classesWeather.score3day}>
  <Score />
  <Score />
  <Score />   
  </div>
);

export default score3day;