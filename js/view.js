// This module contains all view rendering logic

import Chart from "./data.js";

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

export const displayChart = () => {
  $(".title").html("");
  $(".y-axis-labels").html("");
  $(".chart").html("");
  $(".x-axis-labels").html("");

  // reset html prior to mapping
  let htmlTitle = '';
  let htmlYAxisLabels = "";
  let htmlXAxisLabels = '';
  let htmlBars = "";
  let htmlChart = "";

  // dynamic CSS variables
  let title = Chart.options.chartTitle;
  let titleSize = Chart.options.titleFontSize;
  let titleColor = Chart.options.titleFontColor;
  let position = Chart.options.labelsPosition;
  let spacing = Chart.options.barSpacing;
  let barColor = Chart.options.barColor;
  let labelColor = Chart.options.labelColor;
  let height = Chart.options.chartHeight;
  let width = Chart.options.chartWidth;
  let numGridlines = Chart.options.numGridlines;

  const getMixedArrayMax = array => Math.max(...array.filter(val => typeof val === 'number'));

  let maxValue = 0;
  Chart.values.forEach(array => {
    let value = getMixedArrayMax(array);
    if (value > maxValue) maxValue = value;
  } )

  let topChart = Math.ceil(maxValue / numGridlines) * numGridlines;
  let gridlineSize = height / numGridlines;

  // title

  htmlTitle = `<p style="font-size:${titleSize}px; color:${titleColor}; margin-top: 0; margin-bottom: 20px; padding: 0;">${title}</p>`

  // set CSS variables for Y-axis
  document.documentElement.style.setProperty(
    "--y-axis-size",
    `10px ${gridlineSize}px`
  );
  document.documentElement.style.setProperty(
    "--y-axis-rows",
    `repeat(${numGridlines}, 1fr)`
  );
  document.documentElement.style.setProperty(
    "--y-axis-height",
    `${Number(height) + 10}px`
  );

  // build Y-axis label set

  let YSpacing = topChart / numGridlines;
  let YLabel = 0;
  for (let i = 0; i <= numGridlines; i++) {
    htmlYAxisLabels += `<p style="padding: 0px; margin: 0px;">${YLabel}</p>`;
    YLabel += YSpacing;
  }

  // build X-axis label set

  let space = spacing * 14;  // font size is 14 pixels
  let barWidth =
    (width - (Chart.values.length - 1) * space) / Chart.values.length;

  document.documentElement.style.setProperty(
    "--x-axis-length",
    `${Number(width) - barWidth / 2}px`
  );
  document.documentElement.style.setProperty(
    "--x-axis-labels",
    `${(barWidth / 2) + 5}px repeat(${Chart.values.length - 1}, ${barWidth + space + 3}px)`
  );

  for (let i = 0; i < Chart.values.length; i++) {
    htmlXAxisLabels += `<p style="padding: 0px; margin: 1; transform: rotate(-45deg);">${Chart.values[i][0]}</p>`;
  }

  // build chart bar list html
  Chart.values.map((value, index) => {
    let calc = topChart - value[1] + 1;

    htmlBars += `<li style="grid-row: ${topChart + 1} / ${calc};
    grid-column: ${index + 1};
    justify-content: ${position};
    background: ${barColor};
    color: ${labelColor}">
    ${value[1]}
    </li>`;
  });

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
  $(".chart").append(htmlChart);
  $(".x-axis-labels").append(htmlXAxisLabels);
};
