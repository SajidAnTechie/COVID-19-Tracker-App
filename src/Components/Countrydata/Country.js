import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import * as api from "../../Api/Api";
import ReactCountryFlag from "react-country-flag";
import Flags from "country-flag-icons/react/3x2";
import Axullary from "../../hoc/Axullary";

class Country extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    let countryName = this.props.match.params.countryname;
    const dataBycountry = await api.filterByCountry(countryName);
    this.setState({ data: dataBycountry });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.countryname !== this.props.match.params.countryname) {
      return true;
    } else {
      return false;
    }
  }
  async componentDidUpdate() {
    let countryName = this.props.match.params.countryname;
    const dataBycountry = await api.filterByCountry(countryName);
    this.setState({ data: dataBycountry });
  }
  render() {
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
                {fetch.provinceState !== null ? (
                  <td>
                    <Flags.Us title="United States" />
                    {fetch.countryRegion}/{fetch.provinceState}
                  </td>
                ) : (
                  <td>
                    <ReactCountryFlag code="US" />
                    {fetch.countryRegion}
                  </td>
                )}
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

export default Country;
