import React from 'react';
import TextField from 'material-ui/TextField';


const form = props =>  (
    <div>
        <form onSubmit={props.getWeather}>
  
        <TextField 
        type="text"
        name="city"
        hintText="Podaj miasto..."
       
        />
        
        <TextField 
        type="text"
        name="country"
        hintText="Podaj kraj"
        />
        
        <button>Podaj pogodę</button>

        </form>
    </div>
    )

export default form;

