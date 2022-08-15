// This module defines the DOM event handlers

import Chart from "./data.js";
import { displayChart, displayValues } from "./view.js";

export const handleAdd = () => {
  Chart.add = (value) => {
    Chart.values.push(value);
  };

  // Handle value addition
  $(document).on("click", ".value-input .value-add", function () {
    console.log("add event handler");

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
    console.log("remove event handler triggered");
    let removeValue = $('.value-removal input[name="removeValue"]').val();
    Chart.remove(Number(removeValue));
    displayValues();
    displayChart();
  });
};

export const changePosition = () => {
  Chart.position = (position) => {
    Chart.options.valuesPosition = position;
  };

  // Handle position change
  $(".values-position .select-wrapper").on("click", function () {
    console.log("change position handler triggered");
    let positionValue = $('.values-position select[name="valuePosition"]').val();
    Chart.position(positionValue);
    displayValues();
    displayChart();
  });
};
