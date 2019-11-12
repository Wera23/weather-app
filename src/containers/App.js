import React from "react";
import "../containers/App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { WeatherPage } from "../components/WeatherPage";
import Form from "../components/Weather/Form";
import Score from "../components/Weather/Score";
import Cocpit from "../components/Cocpit/Cocpit";

import Login from "../components/Login/Login";
import styles from "../containers/App.css";
import { LoginPage } from "../components/LoginPage";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../components/PrivateRoute';

const API_KEY = "0083b6930a5af544a07904eba6e476c6";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4400"
    },
    secondary: {
      main: "#1de9b6"
    }
  }
});

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

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
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Podaj kraj i miasto"
      });
    }
  };

  render() {
    return (
      <div className={styles.App}>
        <MuiThemeProvider theme={theme}>

          




          <Cocpit
            title={this.props.appTitle}
            />

          

    {/* <Login option={this.props.option} /> 



          <div className={styles.weatherOverlay}>
            <Form getWeather={this.getWeather} />
            <Score
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div> 

          */}
          <Router>
            <div>
              <PrivateRoute exact path="/" component={WeatherPage} />
              <Route path="/login" component={LoginPage} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
