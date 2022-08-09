// This module contains all view rendering logic

import Chart from "./data.js";

export const displayValues = () => {
  Chart.displayValues = () => {
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
};

export const renderChart = {
  
}