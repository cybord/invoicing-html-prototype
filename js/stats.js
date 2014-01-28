// taken from NVD3 examples

// revenue chart by month
// ------------------------
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
      .color(['#55bada'])
      .transitionDuration(250)
      ;

  d3.select('#chart-income-by-month svg')
      .datum(historicalBarChart)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});




// income by client
// ------------------------






long_short_data = [
  {
    key: 'Series1',
    values: [
      {
        "label" : "Aztec Inc." ,
        "value" : 27653
      } ,
      {
        "label" : "Uberlux" ,
        "value" : 92239
      } ,
      {
        "label" : "Netgram" ,
        "value" : 11764
      } ,
      {
        "label" : "Facebox" ,
        "value" : 36624
      } ,
      {
        "label" : "Linkstagram" ,
        "value" : 42684
      } ,
      {
        "label" : "Zappix" ,
        "value" : 53777
      } ,
      {
        "label" : "Earthpure" ,
        "value" : 79813
      } ,
      {
        "label" : "Grupoli" ,
        "value" : 33084
      } ,
      {
        "label" : "Miracles" ,
        "value" : 15851
      }
    ]
  }
];



var chart2;

nv.addGraph(function() {
  chart2 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 50, bottom: 50, left: 100})
      //.showValues(true)
      .tooltips(true)
      // .barColor(d3.scale.category20().range())
      .barColor(['#55bada'])
      .transitionDuration(250)
      .color(['#55bada'])
      .stacked(true)
      //.showControls(false);

  chart2.yAxis
      .tickFormat(d3.format(',.2f'));

  d3.select('#chart-income-by-client svg')
      .datum(long_short_data)
      .call(chart2);

  nv.utils.windowResize(chart2.update);

  chart2.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart2;
});
