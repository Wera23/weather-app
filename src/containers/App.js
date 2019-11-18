import React from "react";
import "../containers/App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { WeatherPage } from "../components/WeatherPage";

import styles from "../containers/App.css";
import { LoginPage } from "../components/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";

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

  render() {
    return (
      <div className={styles.App}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <PrivateRoute exact path="/" component={WeatherPage} />
            <Route path="/login" component={LoginPage} />
          </Router>
        </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;
