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
  $(".values-position .select-position").on("click", function () {
    let position = $('.values-position select[name="valuePosition"]').val();
    Chart.options.valuesPosition = position;
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

export const changeBarColor = () => {
  $(".bar-color .change-bar-color").on("click", function () {
    let barColor = $('.bar-color input[name="barColor"]').val();
    Chart.options.barColor = barColor;
    displayChart();
  });
};

export const changeValueColor = () => {
  $(".value-color .change-value-color").on("click", function () {
    let valueColor = $('.value-color input[name="valueColor"]').val();
    Chart.options.labelColor = valueColor;
    displayChart();
  });
};

