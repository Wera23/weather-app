import React from "react";
import { Link } from "react-router-dom";

import { userService } from "../../_services";


import Score from "..//Weather/Score";


class WeatherPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      users: [],
      temperature: 37,
      city: 'Katowice',
      country: 'Poland',
      humidity: '70%',
      description: '80km/h',

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
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        {user.isAdmin &&  (
            
          <span>
              
            ADMIN
           
            <Score
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
            />

            <p>{this.state.city}</p>
            
          </span>
        )}
        
      
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

export { WeatherPage };
