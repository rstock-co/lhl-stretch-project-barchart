// This module defines the DOM event handlers

import Chart from "./data.js";

export const handleAdd = () => {
  Chart.add = (value) => {
    Chart.values.push(value);
  };

  // Handle value addition
  Chart.taskAdd = () => {

    $(".value-input .value-add").on("click", function () {
      console.log("add event handler triggered")

      let newValue = $('.value-input input[name="newValue"]').val();
      Chart.add(Number(newValue));
      Chart.displayValues();
      console.log(Chart.values);
    
    });
  };
};

export const handleRemove = () => {
  Chart.remove = (id) => {
    Chart.values.splice(id, 1);
  };

  // Handle value removal
  Chart.taskRemove = () => {
    
    $(".value-removal .value-remove").on("click", function () {
      console.log("remove event handler triggered")
      let removeValue = $('.value-removal input[name="removeValue"]').val();
      Chart.remove(Number(removeValue));
      Chart.displayValues();
      console.log(Chart.values);
    });
    
  };
};
