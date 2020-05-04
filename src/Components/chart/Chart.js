import React from "react";
import { Bar } from "react-chartjs-2";

const chart = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return <p>Loading...</p>;
  }
  return (
    <Bar
      data={{
        labels: ["Infected", "Recoverd", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
    />
  );
};
export default chart;
