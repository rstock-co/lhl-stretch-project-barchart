// This module defines the DOM event handlers

import Chart from './data.js';

export const addValue = () => {

  Chart.add = (value) => {Chart.values.push(value)}

  // Handle value addition
  Chart.taskAdd = function() {
  $('.value-input .value-add').on('click', function() {
  let newValue =  $('.value-input input[name="value"]').val();


  alert(newValue, Chart.values);
  Chart.add(newValue);
  alert("new values" + Chart.values)


})
}
};

