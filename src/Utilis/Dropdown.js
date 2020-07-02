import React from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const dropdown = () => {
  return (
    <Dropdown as={ButtonGroup}>
      <Button type="button" variant="light" size="sm">
        Show Chart
      </Button>

      <Dropdown.Toggle
        id="dropdown-split-basic"
        size="sm"
        variant="light"
        title="Drop large"
      />

      <Dropdown.Menu>
        {/* <Link className="dropdown-item" role="button" to="/chart">
          Show Chart
        </Link> */}
        <Dropdown.Item>
          <Link to="/chart">Show Chart</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default dropdown;
