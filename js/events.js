// This module defines the DOM event handlers

import Chart from "./data.js";
import { displayChart, displayValues } from "./view.js";

export const handleAdd = () => {
  Chart.add = (value) => {
    Chart.values.push(value);
  };

  // Handle value addition
  $(document).on("click", ".value-input .value-add", function () {
    let newValue = $('.value-input input[name="newValue"]').val();
    Chart.add(Number(newValue));
    displayValues();
    displayChart();
    console.log(Chart.values);
  });
};

export const handleRemove = () => {
  Chart.remove = (id) => {
    Chart.values.splice(id, 1);
  };

  // Handle value removal
  $(".value-removal .value-remove").on("click", function () {
    let removeValue = $('.value-removal input[name="removeValue"]').val();
    Chart.remove(Number(removeValue));
    displayValues();
    displayChart();
  });
};

export const changePosition = () => {
  $(".labels-position .select-position").on("click", function () {
    let position = $('.labels-position select[name="labelPosition"]').val();
    Chart.options.labelsPosition = position;
    displayChart();
  });
};

export const changeSpacing = () => {
  $(".bar-spacing .select-spacing").on("click", function () {
    let spacing = $('.bar-spacing select[name="barSpacing"]').val();
    Chart.options.barSpacing = spacing;
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

