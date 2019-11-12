import React from "react";
import { Button, TextField } from '@material-ui/core/';
import { getWeather } from "../../_services";


const form = () => (
  <div>
    <form onSubmit={getWeather}>
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
