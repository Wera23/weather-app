import React from "react";

const score = props => (
       <div>
          { props.city && props.country && <p>Lokalizacja: {props.city}, {props.country}</p> }
          { props.temperature && <p>Temperatura: {props.temperature}</p> }
          { props.humidity &&  <p>Wilgotność: {props.humidity}</p> }
          { props.description && <p>Opis: {props.description}</p> }
          { props.error && <p> { props.error } </p> }
          
       </div>        
    )


export default score;
