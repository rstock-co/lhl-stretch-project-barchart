// Define the data structure / requirements for the bar chart, based on project specifications

const Chart = {
  values: [2,5,9,13],           // need to also allow user to pass multiple values for each bar if stacked chart (array of arrays)
  options: {
    chartWidth: 1000,
    chartHeight: 700,
    valuesPosition: 'top',      // can be top, bottom, or middle of the bar
    barWidth: 100,              // needs to be calculated based on total amount of values
    barHeight: 900,             // needs to be calculated based on the values themselves
    barColor: 'red',            // needs to be customizable (also for each label if stacked bar chart)
    labelColor: 'black',        // needs to be customizable (also for each label if stacked bar chart)
    barSpacing: 20,             // needs to be customizable 
    yAxisSpacing: 10,           // needs to be either customizable or calculated based on the values themselves
    chartTitleFontSize: 16,     // needs to set and shown dynamically, and customizable
    chartTitleFontColor: 'blue' // needs to set and shown dynamically, and customizable 
  },
  element: 'element goes here' // the DOM or jQuery element where the chart will be rendered into
}