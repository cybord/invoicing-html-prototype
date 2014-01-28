// taken from NVD3 examples

historicalBarChart = [
  {
    key: "Income by month",
    values: [
      {
        "label" : "January" ,
        "value" : 4623
      } ,
      {
        "label" : "February" ,
        "value" : 9221
      } ,
      {
        "label" : "March" ,
        "value" : 10623
      } ,
      {
        "label" : "April" ,
        "value" : 9623
      } ,
      {
        "label" : "May" ,
        "value" : 14623
      } ,
      {
        "label" : "June" ,
        "value" : 10650
      } ,
      {
        "label" : "July" ,
        "value" : 11623
      } ,
      {
        "label" : "August" ,
        "value" : 4623
      } ,
      {
        "label" : "September" ,
        "value" : 8423
      } ,
      {
        "label" : "October" ,
        "value" : 12977
      } ,
      {
        "label" : "November" ,
        "value" : 16850
      } ,
      {
        "label" : "December" ,
        "value" : 15428
      }
    ]
  }
];




nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .staggerLabels(true)
      //.staggerLabels(historicalBarChart[0].values.length > 8)
      .tooltips(false)
      .showValues(true)
      .transitionDuration(250)
      ;

  d3.select('#chart1 svg')
      .datum(historicalBarChart)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});
