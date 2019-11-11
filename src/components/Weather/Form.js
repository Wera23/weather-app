import React from "react";
import { Button, TextField } from '@material-ui/core/';


const form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <TextField
        name="city"
        color="primary"
        label="Podaj miasto..."
      />

      <TextField
        color="primary"
        name="country"
        label="Podaj kraj"
      />

      <Button variant="contained" color="primary" type="onSubmit">Podaj pogodę</Button>

    </form>
  </div>
);

export default form;
