import React from "react";
import Score from './Score'
import classesWeather from "./WeatherContent.css";

const score3day = props => (
  <div className={classesWeather.score3day}>
  
  <Score
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            /> 
            
  </div>
);

export default score3day;