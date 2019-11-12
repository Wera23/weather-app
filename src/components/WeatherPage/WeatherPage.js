import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core/";
import { userService } from "../../_services";
import Score from "../Weather/Score";
import stylesWeather from "./WeatherPage.css";
import moment from 'moment';

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      temperature: 0,
      humidity: "",
      description: "",
      forecast: {},
      daysForecast: [],
      loadingData: false
    };
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const city = userData.city;
    const country = userData.country;
    const API_KEY = "0083b6930a5af544a07904eba6e476c6";

    this.setState({ loadingData: true });
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          forecast: data,
          daysForecast: data.list.filter((element, i) => i % 8 === 8 - 1),
          loadingData: false
        });
      })
      .catch(err => {
        this.setState({
          loadingData: false
        });
      });

    this.setState({
      user: userData,
      users: { loading: true }
    });
    userService.getAll().then(users => this.setState({ users }));
  }

  render() {
    const { user, loadingData, forecast, daysForecast } = this.state;
    return (
      <div className={stylesWeather.cardOverlay}>
        <h1 className={stylesWeather.header}>Hi {user.firstName}!</h1>
        <p className={stylesWeather.subheader}>
          Your forecast for the next three days
        </p>

        <p className={stylesWeather.location}>
         { user.city } { user.country }
        </p>

        {user.isAdmin && !loadingData && (
          <span>Jajsjjsjsjsjasjas</span>
        )}

        

        {!loadingData && (
          <div className={stylesWeather.scoreBoard}>
          {daysForecast.map(item => {
            return (
              <div className={stylesWeather.scoreField}>
                <Score
                  day={moment(item.dt_txt).format('dddd')}
                  date={moment(item.dt_txt).format('Do YYYY')}
                  temperature={item.main.temp}
                  city={user.city}
                  country={user.country}
                  humidity={item.main.humidity}
                  description={item.weather[0].description}
                  icon={item.weather[0].icon}
                />
              </div>
            );
          })}
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
