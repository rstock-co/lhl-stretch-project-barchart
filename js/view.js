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
  $(".chart").html("");

  // reset html prior to mapping
  let htmlBars = '';
  let htmlChart = '';

  // dynamic CSS variables
  let position = Chart.options.labelsPosition;
  let spacing = Chart.options.barSpacing;
  let barColor = Chart.options.barColor;
  let labelColor = Chart.options.labelColor;
  let height = Chart.options.chartHeight;
  let width = Chart.options.chartWidth;

  let maxValue = Math.max(...Chart.values);


  // build chart bar list html
  Chart.values.map((value, index) => {
    let calc = maxValue - value + 1;
    htmlBars += `<li style="grid-row: ${maxValue} / ${calc};
    grid-column: ${index + 1};
    justify-content: ${position};
    background: ${barColor};
    color: ${labelColor}">
    ${value}
    </li>`;
  });

  htmlChart = `<ul class="chart-display" style="gap: 0 ${spacing}em;
  height: ${height}px;
  width: ${width}px;">
  ${htmlBars}
  </ul>`

  // Update the chart display DOM element
  $(".chart").append(htmlChart);
};
