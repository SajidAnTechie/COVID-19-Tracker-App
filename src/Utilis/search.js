import React, { Component } from "react";
import Axullary from "../hoc/Axullary";
import classes from "./style.module.css";
import { withRouter } from "react-router-dom";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

class Search extends Component {
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
      <Axullary>
        <div className={classes.content}>
          <Form onSubmit={this.handlesubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search by country name"
                aria-label="Search by country name"
                aria-describedby="basic-addon2"
                onChange={this.handlechange}
              />
              <InputGroup.Append>
                <Button variant="light" type="submit">
                  <i className="fas fa-search"></i>
                </Button>
                {/* <InputGroup.Text id="basic-addon2">
                <i className="fas fa-search"></i>
              </InputGroup.Text> */}
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </Axullary>
    );
  }
}
export default withRouter(Search);
