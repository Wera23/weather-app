import React from "react";
import { Link } from "react-router-dom";

import { userService } from "../../_services";

import { Button } from "@material-ui/core/";

import Score from "../Weather/Score";

import stylesWeather from "./WeatherPage.css";

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      temperatureAdmin: 37,
      cityAdmin: "Katowice",
      countryAdmin: "Poland",
      humidityAdmin: "70%",
      descriptionAdmin: "80km/h",
      cityUser: "Warszawa",
      temperatureUser: 12,
      countryUser: "Poland",
      humidityUser: "10%",
      descriptionUser: "120km/h"
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
      <div class={stylesWeather.cardOverlay}>
        <h1 className={stylesWeather.header}>Hi {user.firstName}!</h1>
        <p className={stylesWeather.subheader}>
          Your forecast for the next three days
        </p>

        {user.isAdmin && (
          <div class={stylesWeather.scoreBoard}>
            <div className={stylesWeather.scoreField}>
              <Score
                temperature={this.state.temperatureAdmin}
                city={this.state.cityAdmin}
                country={this.state.countryAdmin}
                humidity={this.state.humidityAdmin}
                description={this.state.descriptionAdmin}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperatureAdmin}
                city={this.state.cityAdmin}
                country={this.state.countryAdmin}
                humidity={this.state.humidityAdmin}
                description={this.state.descriptionAdmin}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperatureAdmin}
                city={this.state.cityAdmin}
                country={this.state.countryAdmin}
                humidity={this.state.humidityAdmin}
                description={this.state.descriptionAdmin}
              />
            </div>
          </div>
        )}

        
{user.isAdmin === false && (
  <div>
     <div class={stylesWeather.scoreBoard}>
            <div className={stylesWeather.scoreField}>
              <Score
                temperature={this.state.temperatureUser}
                city={this.state.cityUser}
                country={this.state.countryUser}
                humidity={this.state.humidityUser}
                description={this.state.descriptionUser}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperatureUser}
                city={this.state.cityUser}
                country={this.state.countryUser}
                humidity={this.state.humidityUser}
                description={this.state.descriptionUser}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperatureUser}
                city={this.state.cityUser}
                country={this.state.countryUser}
                humidity={this.state.humidityUser}
                description={this.state.descriptionUser}
              />
            </div>
          </div>
  </div>
)}
        



        <p>
          <div class={stylesWeather.button}>
            <Button variant="contained" color="secondary" type="onSubmit">
              <Link class={stylesWeather.link} to="/login">
                Logout
              </Link>
            </Button>
          </div>
        </p>
      </div>
    );
  }
}

export { WeatherPage };
