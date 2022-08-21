import { init } from './init.js';
import { displayValues, drawBarChart } from "./view.js";
import Chart from "./data.js";

$(function() {
  init();
  displayValues();
  drawBarChart(Chart.values, Chart.options, 'chart');
});
