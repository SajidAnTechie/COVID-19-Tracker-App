import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import * as api from "../../Api/Api";

class Country extends Component {
  state = {
    data: [],
  };
  _isMounted = false;

  componentDidMount() {
    this.filterdataBycountry();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.countryname !== this.props.match.params.countryname
    ) {
      this.filterdataBycountry();
    }
  }

  filterdataBycountry = async () => {
    this._isMounted = true;
    let countryName = this.props.match.params.countryname;
    const dataBycountry = await api.filterByCountry(countryName);
    if (this._isMounted) {
      this.setState({ data: dataBycountry });
    }
  };
  componentWillUnmount() {
    this._isMounted = false;
  }

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
              {fetch.countryRegion}/{fetch.provinceState}
            </td>
          ) : (
            <td>{fetch.countryRegion}</td>
          )}
          <td>{fetch.active}</td>
          <td>{fetch.confirmed}</td>
          <td>{fetch.recovered}</td>
          <td>{fetch.deaths}</td>
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
