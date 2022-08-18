// This module defines the DOM event handlers

import Chart from "./data.js";
import { displayChart, displayValues } from "./view.js";

export const changeData = () => {

  $(document).on("click", ".value-input .value-add", function () {
    let newValue = $('.value-input input[name="newValue"]').val();
    Chart.values.push(Number(newValue));
    displayValues();
    displayChart();
  });

  $(".value-removal .value-remove").on("click", function () {
    let removeValue = $('.value-removal input[name="removeValue"]').val();
    Chart.values.splice(Number(removeValue), 1);
    displayValues();
    displayChart();
  });
};

export const changeDisplay = () => {
  $(".labels-position .select-position").on("click", function () {
    let position = $('.labels-position select[name="labelPosition"]').val();
    Chart.options.labelsPosition = position;
    displayChart();
  });

  $(".bar-spacing .select-spacing").on("click", function () {
    let spacing = $('.bar-spacing select[name="barSpacing"]').val();
    Chart.options.barSpacing = spacing;
    displayChart();
  });

  $(".gridlines .num-gridlines").on("click", function () {
    let numGridlines = $('.gridlines select[name="numGridlines"]').val();
    Chart.options.numGridlines = numGridlines;
    displayChart();
  });

};

export const changeColors = () => {
  $(".colors .change-bar-color").on("click", function () {
    let barColor = $('.colors input[name="barColor"]').val();
    Chart.options.barColor = barColor;
    displayChart();
    console.log(`changed color to ${barColor}`)
  });

  $(".colors .change-label-color").on("click", function () {
    let labelColor = $('.colors input[name="labelColor"]').val();
    Chart.options.labelColor = labelColor;
    displayChart();
  });
};

export const changeSize = () => {
  $(".chart-size .change-chart-height").on("click", function () {
    let chartHeight = $('.chart-size input[name="chartHeight"]').val();
    Chart.options.chartHeight = chartHeight;
    displayChart();
  });

  $(".chart-size .change-chart-width").on("click", function () {
    let chartWidth = $('.chart-size input[name="chartWidth"]').val();
    Chart.options.chartWidth = chartWidth;
    displayChart();
  });
};

