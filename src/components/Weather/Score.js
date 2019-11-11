import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import classesWeather from "./WeatherContent.css";

const score = props => (
  <>
    {props.city && props.country && (
      <div className={classesWeather.score}>
        <Card className={classesWeather.card}>
          <CardContent>
           
              <Typography className={classesWeather.header}>Piątek</Typography>
           
            {props.temperature && (
              <Typography className={classesWeather.cardText}>
                {props.temperature}{" "}
              </Typography>
            )}
            {props.humidity && (
              <Typography className={classesWeather.cardText}>
                {props.humidity}
              </Typography>
            )}
            {props.description && (
              <Typography className={classesWeather.cardText}>
                {props.description}
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
