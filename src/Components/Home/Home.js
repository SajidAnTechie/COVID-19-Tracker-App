import React, { Component } from "react";
import * as api from "../../Api/Api";
import Table from "react-bootstrap/Table";
import ReactCountryFlag from "react-country-flag";

class Home extends Component {
  state = {
    Loading: false,
    data: [],
  };
  async componentDidMount() {
    this.setState({ Loading: true });
    const fetchdata = await api.filterByConfirmed();
    this.setState({ data: fetchdata });
    this.setState({ Loading: false });
  }

  render() {
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
        <tbody>
          {this.state.Loading && (
            <tr>
              <td>
                <p>Loading....</p>
              </td>
            </tr>
          )}
          {!this.state.Loading &&
            this.state.data.map((fetch, index) => (
              <tr key={index}>
                <td>
                  <ReactCountryFlag
                    countryCode={fetch.iso2}
                    svg
                    title={fetch.iso2}
                  />
                  {fetch.combinedKey}
                </td>
                <td>{fetch.active}</td>
                <td>{fetch.confirmed}</td>
                <td>{fetch.recovered}</td>
                <td>{fetch.deaths}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

export default Home;
