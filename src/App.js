import React, { Component } from "react";
import Card from "./Components/Card/Card";
import Home from "./Components/Home/Home";
import * as api from "./Api/Api";
import Logo from "./Components/Logo/Logo";
import Utilis from "./Utilis/Utilis";
import Country from "./Components/Countrydata/Country";
import { Switch, Route } from "react-router-dom";
import Chart from "./Components/chart/Chart";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchdata = await api.fetchdata();
    this.setState({ data: fetchdata });
  }

  render() {
    return (
      <div className={classes.container}>
        <Logo />
        <Card data={this.state.data} />
        <Utilis />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:countryname" component={Country} />
          <Route
            path="/chart"
            exact
            render={(props) => <Chart {...props} data={this.state.data} />}
          />
        </Switch>
      </div>
    );
  }
}
