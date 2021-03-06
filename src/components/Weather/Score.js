import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import classesWeather from "./WeatherContent.css";

const score = props => (
  <>
    {props.city && props.country && (
      
        <Grid wrap ms="12" mx="12"> 
        <Card className={classesWeather.card}>         
          <CardContent>
            <Typography className={classesWeather.header} variant="h5">
              {props.day}
            </Typography>
            {props.date && (
              <Typography className={classesWeather.cardText}>
                {props.date}
              </Typography>
            )}
            {props.temperature && (
              <Typography variant="h3" className={classesWeather.temp}>
                {props.temperature} &#x2103;
              </Typography>
            )}
            {props.humidity && (
              <Typography className={classesWeather.cardText}>
                Humidity: {props.humidity}
              </Typography>
            )}
            {props.icon && (
              <img
                src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
                alt={props.description}
              />
            )}
            {props.description && (
              <Typography className={classesWeather.cardText}>
                ({props.description})
              </Typography>
            )}
            {props.error && (
              <Typography className={classesWeather.cardText}>
                {props.error}
              </Typography>
            )}
          </CardContent>
        </Card>
       </Grid>
    )}
  </>
);

export default score;
