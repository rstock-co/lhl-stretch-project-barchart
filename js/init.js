// This module initializes the app to be ready to handle DOM events

import { changeData, changeDisplay, changeColors, changeSize } from "./events.js";
import { displayValues, displayChart } from "./view.js";

export const init = () => {
  initializeEventHandlers();
  displayValues();
  displayChart();
  console.log("initialized app");
};

const initializeEventHandlers = () => {
  changeData();
  changeDisplay();
  changeColors();
  changeSize();
};
