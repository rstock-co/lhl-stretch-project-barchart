// This module initializes the app to be ready to handle DOM events

import {
  changeData,
  changeSize,
  changeColors,
  changeDisplay,
  changeTitle
} from "./events.js";


export const init = () => {
  changeData();
  changeSize();
  changeColors();
  changeDisplay();
  changeTitle();
};
