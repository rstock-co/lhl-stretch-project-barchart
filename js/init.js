// This module initializes the app to be ready to handle DOM events

import {addValue} from './events.js';
import Chart from './data.js';

export const init = () => {

initializeEventHandlers();
alert("initialized app")
alert(Chart.values)
console.log(Chart)
}

const initializeEventHandlers = () => {

addValue();
// removeValue();

}
