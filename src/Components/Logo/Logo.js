import React from "react";
import Logo from "../../assests/images/logo.png";
import classes from "./Logo.module.css";
const logo = () => {
  return (
    <div className={classes.logo}>
      <img src={Logo} className={classes.logo} alt="Covid-19 logo" />
    </div>
  );
};
export default logo;
