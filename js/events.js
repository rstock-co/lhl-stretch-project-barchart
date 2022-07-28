// This module defines the DOM event handlers

import Chart from "./data.js";

export const handleAdd = () => {
  Chart.add = (value) => {
    Chart.values.push(value);
  };

  // Handle value addition
  Chart.taskAdd = () => {

    $('.value-input .value-add').on('click', function() {
      let newValue = $('.value-input input[name="newValue"]').val();
      Chart.add(Number(newValue));
      console.log(Chart.values)
    });
  /*
    $('.value-input .value-add').on('click', function () {
      console.log('b')
      let newValue = $('.value-input input[name="newValue"]').val();
      console.log(newValue)
      console.log(Chart.values);
      Chart.add(newValue);
      console.log(Chart.values);
    });
  };
  */
};
}