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
      temperature: 37,
      city: "Gdynia",
      country: "Poland",
      humidity: "70%",
      description: "80km/h",
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
      <div className={stylesWeather.cardOverlay}>
        <h1 className={stylesWeather.header}>Hi {user.firstName}!</h1>
        <p className={stylesWeather.subheader}>
          Your forecast for the next three days
        </p>

        {user.isAdmin && (
          <div className={stylesWeather.scoreBoard}>
            <div className={stylesWeather.scoreField}>
              <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
              />
            </div>
          </div>
        )}

        
{user.isAdmin === false && (
  <div>
     <div className={stylesWeather.scoreBoard}>
            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
              />
            </div>

            <div className={stylesWeather.scoreField}>
            <Score
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
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
