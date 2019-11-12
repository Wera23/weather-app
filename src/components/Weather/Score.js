import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import classesWeather from "./WeatherContent.css";

const score = props => (
  <>
    {props.city && props.country && (
      <div className={classesWeather.score}>
        <Card className={classesWeather.card}>
          <CardContent>
           
              <Typography className={classesWeather.header} variant="h5">Friday</Typography>
           
            {props.temperature && (
              <Typography variant="h3" className={classesWeather.temp}> 
                {props.temperature} &#176;
              </Typography>
            )}
            {props.humidity && (
              <Typography className={classesWeather.cardText}>
                Humidity: {props.humidity}
              </Typography>
            )}
            {props.description && (
              <Typography className={classesWeather.cardText}>
               Wind:  {props.description}
              </Typography>
            )}
            {props.error && (
              <Typography className={classesWeather.cardText}>
                {" "}
                {props.error}{" "}
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    )}
  </>
);

export default score;
