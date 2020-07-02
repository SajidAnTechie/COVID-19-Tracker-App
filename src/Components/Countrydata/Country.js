import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import * as api from "../../Api/Api";

class Country extends Component {
  state = {
    Loading: false,
    data: [],
  };
  _isMounted = true;

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
    this.setState({ Loading: true });
    let countryName = this.props.match.params.countryname;
    const dataBycountry = await api.filterByCountry(countryName);
    if (this._isMounted) {
      this.setState({ data: dataBycountry });
      this.setState({ Loading: false });
    }
  };
  componentWillUnmount() {
    this._isMounted = false;
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
              <td>Loading...</td>
            </tr>
          )}
          {!this.state.Loading &&
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
            ))}
        </tbody>
      </Table>
    );
  }
}

export default Country;
