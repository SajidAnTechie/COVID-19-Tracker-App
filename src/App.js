import React, { Component } from "react";
import Card from "./Components/Card/Card";
import Home from "./Components/Home/Home";
import * as api from "./Api/Api";
import Search from "./Utilis/search";
import Logo from "./Components/Logo/Logo";
import Country from "./Components/Countrydata/Country";
import { Switch, Route } from "react-router-dom";

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
        <Search />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:countryname" component={Country} />
        </Switch>
      </div>
    );
  }
}
