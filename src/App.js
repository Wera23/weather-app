import React from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Title from './Weather/Title';
import Form from './Weather/Form';
import Score from './Weather/Score';
import FieldScore from './Weather/FieldScore';


const API_KEY = "0083b6930a5af544a07904eba6e476c6";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

getWeather = async (e) => { 

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
  const data = await api_call.json();
  

  if (city && country) {
    
  console.log(data);
  this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: ""
  })
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: "Podaj kraj i miasto"
    })
  }

  }
  
render () {
  
  return (
    <div>
      <MuiThemeProvider>
      <Title />
      <Form getWeather={this.getWeather}/>
      <Score
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      /><FieldScore />
      </MuiThemeProvider>
    </div>
    
  );
}  
  

}

export default App;
