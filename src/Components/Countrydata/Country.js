import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import * as api from "../../Api/Api";
import ReactCountryFlag from "react-country-flag";

class Country extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.filterdataBycountry();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.countryname !== this.props.match.params.countryname) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    this.filterdataBycountry();
  }

  filterdataBycountry = async () => {
    let countryName = this.props.match.params.countryname;
    const dataBycountry = await api.filterByCountry(countryName);
    this.setState({ data: dataBycountry });
  };

  render() {
    let filterByCountry = !this.state.data[0] ? (
      <tr>
        <td>Loading...</td>
      </tr>
    ) : (
      this.state.data.map((fetch, index) => (
        <tr key={index}>
          {fetch.provinceState !== null ? (
            <td>
              <ReactCountryFlag
                countryCode={fetch.iso3}
                svg
                title={fetch.iso3}
              />
              {fetch.countryRegion}/{fetch.provinceState}
            </td>
          ) : (
            <td>
              <ReactCountryFlag
                countryCode={fetch.iso3}
                svg
                title={fetch.iso3}
              />
              {fetch.countryRegion}
            </td>
          )}
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
        <tbody>{filterByCountry}</tbody>
      </Table>
    );
  }
}

export default Country;
