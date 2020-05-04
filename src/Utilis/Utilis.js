import React from "react";
import Dropdown from "./Dropdown";
import Search from "./search";
import classes from "./style.module.css";

export default function utilis() {
  return (
    <div className={classes.content}>
      <Search />
      <Dropdown />
    </div>
  );
}
