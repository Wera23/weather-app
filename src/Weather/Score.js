import React from "react";
import {Card, CardText} from 'material-ui/Card';

const score = props => (
       <div>
          <Card>
         { props.city && props.country &&  <CardText>Lokalizacja: {props.city}, {props.country} </CardText> } 
         { props.temperature &&  <CardText>Temperatura: {props.temperature} </CardText> } 
         { props.humidity &&  <CardText>Wilgotność: {props.humidity}</CardText> }
         { props.description && <CardText>Opis: {props.description}</CardText> } 
         { props.error && <CardText> { props.error } </CardText> } 
          </Card>
       </div>        
    )


export default score;
