// This module contains all view rendering logic

import Chart from "./data.js";

export const displayValues = () => {
  $(".value-display .value-list").html("");

  // reset html prior to mapping
  let html = "";

  // build value list html
  Chart.values.map((value, index) => {
    html += `<li>index: ${index}, value: ${value}</li>`;
  });

  // Update the value list DOM element
  $(".value-display .value-list").append(html);
};

export const displayChart = () => {
  $(".chart .chart-display").html("");

  // reset html prior to mapping
  let html2 = "";
  let maxValue = Math.max(...Chart.values);
  console.log(maxValue)

  // build chart bar list html
  Chart.values.map((value, index) => {
    let calc = maxValue - value + 1;
    console.log(typeof(value))
    html2 += `<li style="grid-row-start: ${maxValue}; grid-row-end: ${calc}; grid-column:${index + 1}">
    ${index}
    <span>${value}</span>
    </li>`;
  });

  // Update the value list DOM element
  $(".chart .chart-display").append(html2);
};
