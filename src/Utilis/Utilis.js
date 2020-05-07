import React from "react";
import Dropdown from "./Dropdown";
import Search from "./search";
import classes from "./style.module.css";

function utilis() {
  return (
    <div className={classes.content}>
      <Search />
      <Dropdown />
    </div>
  );
}

export default React.memo(utilis);
