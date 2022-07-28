// This module initializes the app to be ready to handle DOM events

import { handleAdd } from "./events.js";
import Chart from "./data.js";

export const init = () => {
  initializeEventHandlers();
  console.log("initialized app");
};

const initializeEventHandlers = () => {
  handleAdd();
  Chart.taskAdd();
  console.log(Chart.values)
};
