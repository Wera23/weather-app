import React from "react";

import { Button, TextField, Card, CardContent, Typography} from '@material-ui/core/';
import classesLogin from "./Login.css";

const login = props => (
  <div className={classesLogin.loginOverlay}>
    
    <Card style={{ backgroundColor: "#ECEFF1" }} className={classesLogin.card}>
    <CardContent>
      <Typography className={classesLogin.header}> {props.option} </Typography>

      <div className={classesLogin.input}>
        <TextField hintText="Nazwa użytkownika" color="secondary" />
        <TextField
          label="Podaj hasło"
          floatingLabelText="Password"
          type="password"
          color="secondary" 
        />
      </div>

      <div className={classesLogin.button}>

      <Button variant="contained" color="primary" type="onSubmit"> {props.option} </Button>


      </div>
      </CardContent>
    </Card>
  </div>
);

export default login;
