// This module contains all view rendering logic

import Chart from "./data.js";

const getMixedArrayMax = array => Math.max(...array.filter(val => typeof val === 'number'));

const setCSSVariable = (variableName, variableValue) => {
  document.documentElement.style.setProperty(
    `${variableName}`,
    `${variableValue}`);
}

export const displayValues = () => {
  $(".value-display .value-list").html("");

  // reset html prior to mapping
  let htmlList = "";

  // build value list html
  Chart.values.map((value, index) => {
    htmlList += `<li><i>index</i>: <b>${index}</b>, <i>label</i>: <b>${value[0]}</b>, <i>value</i>: <b>${value[1]}</b></li>`;
  });

  // Update the value list DOM element
  $(".value-display .value-list").append(htmlList);
};

export const drawBarChart = (data, options, element) => {

  // reset html prior to mapping
  $(".title").html("");
  $(".y-axis-labels").html("");
  $(`.${element}`).html("");
  $(".x-axis-labels").html("");

  // dynamic CSS variables
  let title = options.chartTitle;
  let titleSize = options.titleFontSize;
  let titleColor = options.titleFontColor;
  let position = options.labelsPosition;
  let spacing = options.barSpacing;
  let barColor = options.barColor;
  let labelColor = options.labelColor;
  let height = options.chartHeight;
  let width = options.chartWidth;
  let numGridlines = options.numGridlines;

  let maxValue = 0;
  data.forEach(array => {
    let value = getMixedArrayMax(array);
    if (value > maxValue) maxValue = value;
  } )

  let topChart = Math.ceil(maxValue / numGridlines) * numGridlines;
  let gridlineSize = height / numGridlines;

  let htmlTitle = '';
  let htmlYAxisLabels = "";
  let htmlXAxisLabels = '';
  let htmlBars = "";
  let htmlChart = "";

  // TITLE

  htmlTitle = `<p style="font-size:${titleSize}px; color:${titleColor}; margin-top: 0; margin-bottom: 20px; padding: 0;">${title}</p>`

  // Y-AXIS
  setCSSVariable("--y-axis-size", `10px ${gridlineSize}px`);
  setCSSVariable("--y-axis-rows", `repeat(${numGridlines}, 1fr)`);
  setCSSVariable("--y-axis-height", `${Number(height) + 10}px`);

  let YSpacing = topChart / numGridlines;
  let YLabel = 0;
  for (let i = 0; i <= numGridlines; i++) {
    htmlYAxisLabels += `<p style="padding: 0px; margin: 0px;">${YLabel}</p>`;
    YLabel += YSpacing;
  }

  // X-AXIS

  let space = spacing * 14;  // font size is 14 pixels
  let barWidth = (width - (data.length - 1) * space) / data.length;

  setCSSVariable("--x-axis-length", `${Number(width) - barWidth / 2}px`);
  setCSSVariable("--x-axis-labels", `${(barWidth / 2) + 5}px repeat(${data.length - 1}, ${barWidth + space + 3}px)`);

  for (let i = 0; i < data.length; i++) {
    htmlXAxisLabels += `<p style="padding: 0px; margin: 1; transform: rotate(-45deg);">${data[i][0]}</p>`;
  }

  // BARS

  data.map((value, index) => {
    let calc = topChart - value[1] + 1;

    htmlBars += `<li style="grid-row: ${topChart + 1} / ${calc};
    grid-column: ${index + 1};
    justify-content: ${position};
    background: ${barColor};
    color: ${labelColor}">
    ${value[1]}
    </li>`;
  });

  // CHART

  htmlChart = `<ul class="chart-display" style="gap: 0 ${spacing}em;
  grid-template-rows: repeat(${topChart}, 1fr);
  height: ${height}px;
  width: ${width}px;
  background-size: 10px ${gridlineSize}px;
  background-image:
   linear-gradient(to bottom, grey 1px, transparent 1px);">
  ${htmlBars}
  </ul>`;

  // Update the chart display DOM element
  $(".title").append(htmlTitle);
  $(".y-axis-labels").append(htmlYAxisLabels);
  $(`.${element}`).append(htmlChart);
  $(".x-axis-labels").append(htmlXAxisLabels);
};
