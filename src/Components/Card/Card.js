import React from "react";
import classes from "./Card.module.css";
import CountUp from "react-countup";

const Card = (props) => {
  if (!props.data.confirmed) {
    return <p>Loading...</p>;
  }
  return (
    <div className={classes.content}>
      <div className={classes.box}>
        <p>Infected</p>
        <CountUp
          start={0}
          end={props.data.confirmed.value}
          duration={2.75}
          separator=","
          className={classes.counter}
        />
        <p>lastUpdate {new Date(props.data.lastUpdate).toDateString()}</p>
        <h6>Number of confirmed cases of COVID-19</h6>
      </div>
      <div className={classes.box}>
        <p>Recovered</p>
        <CountUp
          start={0}
          end={props.data.recovered.value}
          duration={2.75}
          separator=","
          className={classes.counter}
        />
        <p>lastUpdate {new Date(props.data.lastUpdate).toDateString()}</p>
        <h6>Number of recovered cases of COVID-19</h6>
      </div>
      <div className={classes.box}>
        <p>Deaths</p>
        <CountUp
          start={0}
          end={props.data.deaths.value}
          duration={2.75}
          separator=","
          className={classes.counter}
        />
        <p>lastUpdate {new Date(props.data.lastUpdate).toDateString()}</p>
        <h6>Number of deaths cases of COVID-19</h6>
      </div>
    </div>
  );
};
export default Card;
