import React from 'react';
import classes from './Cocpit.css'

const cocpit = (props) =>  (
        <div className={classes.Cocpit} >
         <h1> {props.title} </h1>
         <p>{props.subtitle}</p>    
    </div>
    )


export default cocpit;
