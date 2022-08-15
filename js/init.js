// This module initializes the app to be ready to handle DOM events

import { handleAdd, handleRemove, changePosition, changeSpacing, changeColors, changeSize } from "./events.js";
import { displayValues, displayChart } from "./view.js";

export const init = () => {
  initializeEventHandlers();
  displayValues();
  displayChart();
  console.log("initialized app");
};

const initializeEventHandlers = () => {
  handleAdd();
  handleRemove();
  changePosition();
  changeSpacing();
  changeColors();
  changeSize();
};
