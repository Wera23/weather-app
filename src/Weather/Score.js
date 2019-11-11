import React from "react";
import {Card, CardText} from 'material-ui/Card';
import { grey200 } from "material-ui/styles/colors";

const styleCard = {
   backgroundColor: grey200,    
}

const styleText = {
   fontSize: '14px',
   fontWeight: '200',
   padding: '10px',
}

const score = props => (

         <div>
          <Card style={styleCard}>
         { props.city && props.country &&  <CardText style={styleText}>Lokalizacja: {props.city}, {props.country} </CardText> } 
         { props.temperature &&  <CardText style={styleText}>Temperatura: {props.temperature} </CardText> } 
         { props.humidity &&  <CardText style={styleText}>Wilgotność: {props.humidity}</CardText> }
         { props.description && <CardText style={styleText}>Opis: {props.description}</CardText> } 
         { props.error && <CardText style={styleText}> { props.error } </CardText> } 
          </Card>
       </div>        
    )


export default score;
