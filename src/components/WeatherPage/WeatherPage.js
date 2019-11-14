import React from "react";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core/";
import { userService } from "../../_services";
import Score from "../Weather/Score";
import UserManagement from "../UserManagement/UserManagement";
import stylesWeather from "./WeatherPage.css";
import moment from "moment";

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      temperature: 0,
      humidity: "",
      description: "",
      daysForecast: [],
      todayWeather: [],
      todayWeatherDescription: "",
      loadingData: false,
      loadingWeather: false
    };
  }

   delete = (user, index) => {
    alert('Dziala')
    let users = [...this.state.users]
    users.splice(index, 1);
    this.setState({users: users})
  }

  
  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("user"));
    const city = userData.city;
    const country = userData.country;
    const API_KEY = "0083b6930a5af544a07904eba6e476c6";

    this.setState({ loadingData: true });
    this.setState({ loadingWeather: true });
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          daysForecast: data.list.filter((element, i) => i % 8 === 8 - 1),
          loadingData: false
        });
      })
      .catch(err => {
        this.setState({
          loadingData: false
        });
      });

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          todayWeather: data.weather,
          todayWeatherDescription: data.weather[0].description,
          loadingWeather: false
        });
      })

      .catch(err => {
        this.setState({
          loadingWeather: false
        });
      });

    this.setState({
      user: userData,
      users: { loading: true }
    });

    userService.getAll().then(users => this.setState({ users }));
    console.log(this.state.users);

   
  }




  render() {
    

    const {
      user,
      loadingData,
      loadingWeather,
      daysForecast,
      todayWeather,
      todayWeatherDescription
    } = this.state;

    return (
      <div
        className={[
          stylesWeather.pageBackground,
          this.changeBackground(todayWeatherDescription)
        ].join(" ")}
      >
        <div className={stylesWeather.cardOverlay}>
          <h1 className={stylesWeather.header}>
            Hi {user.firstName} {user.lastName}!
          </h1>

          {user.isAdmin && !loadingData && (
            <div className={stylesWeather.usersBoard}>
              USERS
              <table className={stylesWeather.table}>
                <thead className={stylesWeather.left}>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <ul>
                  {this.state.users.map((user, index) => {
                    
                    return (
      
                    
                    <UserManagement
                      key={index}
                      mgname={user.firstName}
                      mgusername={user.lastName}
                      click={this.delete.bind(this, user)}
                    />
                    )})}
                 
                </ul>
              </table>
            </div>
          )}

          {!loadingWeather && (
            <>
              {todayWeather.map((item, index) => {
                return (
                  <div className={stylesWeather.weatherNow} key={index}>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                      alt={item.description}
                    />
                    <span>({item.description})</span>
                  </div>
                );
              })}
            </>
          )}

          <h3 className={stylesWeather.subheader}>
            Your forecast for the next five days in {user.city}
          </h3>

          {!loadingData && (
            <div className={stylesWeather.scoreBoard}>
              {daysForecast.map((item, index) => {
                return (
                  <div className={stylesWeather.scoreField} key={index}>
                    <Score
                      day={moment(item.dt_txt).format("dddd")}
                      date={moment(item.dt_txt).format("Do YYYY")}
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

          {loadingData && (
            <div className={stylesWeather.scoreBoard}>
              <CircularProgress color="secondary" size={80} />
            </div>
          )}

          <div className={stylesWeather.button}>
            <Button variant="contained" color="secondary">
              <Link className={stylesWeather.link} to="/login">
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  changeBackground(weather) {
    switch (weather) {
      case "snow":
        return stylesWeather.snowBackground;
      case "mist":
        return stylesWeather.mistBackground;
      case "clear sky":
        return stylesWeather.clearSkyBackground;
      case "few clouds":
        return stylesWeather.fewCloudsBackground;
      case "scattered clouds":
      case "overcast clouds":
        return stylesWeather.scatteredCloudsBackground;
      case "broken clouds":
        return stylesWeather.brokenCloudsBackground;
      case "shower rain":
        return stylesWeather.showerRainBackground;
      case "rain":
      case "light rain":
        return stylesWeather.rainBackground;
      case "thunderstorm":
        return stylesWeather.thunderstormBackground;
      default:
        return;
    }
  }
}

export { WeatherPage };
