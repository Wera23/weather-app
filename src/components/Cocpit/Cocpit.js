import React from "react";
import classes from "./Cocpit.css";
import { AppBar, Typography } from "@material-ui/core/";



const cocpit = props => (
    
  <AppBar position="static" className={classes.AppBar} color="secondary">
    
      <Typography color="inherit">
          <div className={classes.toolbar} >
        <h1 className={classes.header} > {props.title} </h1>
        
        </div>
      </Typography>

  </AppBar>
);

export default cocpit;
