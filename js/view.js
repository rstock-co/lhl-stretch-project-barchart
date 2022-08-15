// This module contains all view rendering logic

import Chart from "./data.js";

export const displayValues = () => {
  $(".value-display .value-list").html("");

  // reset html prior to mapping
  let htmlList = "";

  // build value list html
  Chart.values.map((value, index) => {
    htmlList += `<li>index: ${index}, value: ${value}</li>`;
  });

  // Update the value list DOM element
  $(".value-display .value-list").append(htmlList);
};

export const displayChart = () => {
  $(".chart .chart-display").html("");

  // reset html prior to mapping
  let htmlChart = "";
  let maxValue = Math.max(...Chart.values);
  let position = Chart.options.valuesPosition;

  // build chart bar list html
  Chart.values.map((value, index) => {
    let calc = maxValue - value + 1;
    htmlChart += `<li style="grid-row: ${maxValue} / ${calc}; grid-column: ${index + 1}; justify-content: ${position};">
    ${value}
    </li>`;
  });

  // Update the value list DOM element
  $(".chart .chart-display").append(htmlChart);
};
