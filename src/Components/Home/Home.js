import React, { Component } from "react";
import * as api from "../../Api/Api";
import Table from "react-bootstrap/Table";
import ReactCountryFlag from "react-country-flag";

class Home extends Component {
  state = {
    data: [],
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
    let filterByConfirmed = !this.state.data[0] ? (
      <tr>
        <td>Loading...</td>
      </tr>
    ) : (
      this.state.data.map((fetch, index) => (
        <tr key={index}>
          <td>
            <ReactCountryFlag countryCode={fetch.iso2} svg title={fetch.iso2} />
            {fetch.countryRegion}
          </td>
          <td style={{ color: "#ee9c31", fontWeight: "bold" }}>
            {fetch.active}
          </td>
          <td style={{ color: "#7f7fff", fontWeight: "bold" }}>
            {fetch.confirmed}
          </td>
          <td style={{ color: "#7fff7f", fontWeight: "bold" }}>
            {fetch.recovered}
          </td>
          <td style={{ color: "#ff7f7f", fontWeight: "bold" }}>
            {fetch.deaths}
          </td>
        </tr>
      ))
    );
    return (
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
        <tbody>{filterByConfirmed}</tbody>
      </Table>
    );
  }
}

export default Home;
