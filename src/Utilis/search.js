import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

class Search extends React.PureComponent {
  state = {
    country: "",
  };

  handlechange = (e) => {
    this.setState({ country: e.target.value });
  };
  handlesubmit = (e) => {
    e.preventDefault();
    let countryname = this.state.country;
    this.props.history.push("/country/" + countryname);
  };

  render() {
    return (
      <Form onSubmit={this.handlesubmit}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search by country name"
            aria-label="Search by country name"
            name="searchinput"
            aria-describedby="basic-addon2"
            onChange={this.handlechange}
          />
          <InputGroup.Append>
            <Button type="submit" variant="dark">
              <i style={{ color: "white" }} className="fas fa-search"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}
export default withRouter(Search);
