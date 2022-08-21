// This module defines the DOM event handlers

import Chart from "./data.js";
import { drawBarChart, displayValues } from "./view.js";

export const changeData = () => {
  $(document).on("click", ".value-input .value-add", function () {
    let newValue = $('.value-input input[name="newValue"]').val();
    let array = newValue.split(" ");
    array[1] = Number(array[1]);
    Chart.values.push(array);
    displayValues();
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".value-removal .value-remove").on("click", function () {
    let removeValue = $('.value-removal input[name="removeValue"]').val();
    Chart.values.splice(Number(removeValue), 1);
    displayValues();
    drawBarChart(Chart.values, Chart.options, 'chart');
  });
};

export const changeTitle = () => {
  $(".chart-title .title-button").on("click", function () {
    let title = $('.chart-title input[name="chartTitle"]').val();
    Chart.options.chartTitle = title;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".title-display .change-title-size").on("click", function () {
    let titleFontSize = $('.title-display input[name="titleSize"]').val();
    Chart.options.titleFontSize = titleFontSize;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".title-display .change-title-color").on("click", function () {
    let titleColor = $('.title-display input[name="titleColor"]').val();
    Chart.options.titleFontColor = titleColor;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });
}

export const changeSize = () => {
  $(".chart-size .change-chart-height").on("click", function () {
    let chartHeight = $('.chart-size input[name="chartHeight"]').val();
    Chart.options.chartHeight = chartHeight;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".chart-size .change-chart-width").on("click", function () {
    let chartWidth = $('.chart-size input[name="chartWidth"]').val();
    Chart.options.chartWidth = chartWidth;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });
};

export const changeColors = () => {
  $(".colors .change-bar-color").on("click", function () {
    let barColor = $('.colors input[name="barColor"]').val();
    Chart.options.barColor = barColor;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".colors .change-label-color").on("click", function () {
    let labelColor = $('.colors input[name="labelColor"]').val();
    Chart.options.labelColor = labelColor;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });
};

export const changeDisplay = () => {
  $(".labels-position .select-position").on("click", function () {
    let position = $('.labels-position select[name="labelPosition"]').val();
    Chart.options.labelsPosition = position;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".bar-spacing .select-spacing").on("click", function () {
    let spacing = $('.bar-spacing select[name="barSpacing"]').val();
    Chart.options.barSpacing = spacing;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });

  $(".gridlines .num-gridlines").on("click", function () {
    let numGridlines = $('.gridlines select[name="numGridlines"]').val();
    Chart.options.numGridlines = numGridlines;
    drawBarChart(Chart.values, Chart.options, 'chart');
  });
};

