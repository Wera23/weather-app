import React from "react";
import { Link } from "react-router-dom";

import { userService } from "../../_services";

import { Button, Card, Typography, CardContent } from "@material-ui/core/";

import Score from "../Weather/Score";

import stylesWeather from './WeatherPage.css'

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      temperature: 37,
      city: "Katowice",
      country: "Poland",
      humidity: "70%",
      description: "80km/h"
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
      users: { loading: true }
    });
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { user } = this.state;
    console.log(this.state.city);
    return (
      <div class={stylesWeather.cardOverlay} >
      
      
          <h1>Hi {user.firstName}!</h1>


          {user.isAdmin && (
            <div class={stylesWeather.scoreBoard}>
              <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
              />
            </div>
          )}

        <p>
          <div class={stylesWeather.button}>
            <Button  variant="contained" color="secondary" type="onSubmit">
              <Link class={stylesWeather.link} to="/login">Logout</Link>
            </Button>
          </div>
        </p>
      </div>
    );
  }
}

export { WeatherPage };
