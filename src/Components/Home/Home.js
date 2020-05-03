import React, { Component } from "react";
import * as api from "../../Api/Api";
import Table from "react-bootstrap/Table";
import Axullary from "../../hoc/Axullary";

class Home extends Component {
  state = {
    data: [],
    country: "",
  };
  async componentDidMount() {
    const fetchdata = await api.filterByConfirmed();
    this.setState({ data: fetchdata });
  }
  render() {
    // console.log(this.state.data);
    // let filterdata = this.state.data.map((filter) => {
    //   return this.state.country !== ""
    //     ? filter.countryRegion === this.state.country
    //     : filter;
    // });
    // let searchfilter = filterdata.map((fetch, index) => (
    //   <tr key={index}>
    //     <td>{fetch.countryRegion}</td>
    //     <td>{fetch.active}</td>
    //     <td>{fetch.confirmed}</td>
    //     <td>{fetch.recovered}</td>
    //     <td>{fetch.deaths}</td>
    //   </tr>
    // ));
    // let search = searchfilter[0] ? searchfilter : null;
    // console.log(filterdata);
    return (
      <Axullary>
        <Table responsive>
          <thead>
            <tr>
              <th>Country/Region</th>
              <th>Active Cases</th>
              <th>Total Confirmed</th>
              <th>Total Recovered</th>
              <th>Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((fetch, index) => (
              <tr key={index}>
                <td>{fetch.countryRegion}</td>
                <td>{fetch.active}</td>
                <td>{fetch.confirmed}</td>
                <td>{fetch.recovered}</td>
                <td>{fetch.deaths}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Axullary>
    );
  }
}

export default Home;
