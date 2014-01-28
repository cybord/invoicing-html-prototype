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
    color: '#d62728',
    values: [
      {
        "label" : "Group A" ,
        "value" : -1.8746444827653
      } ,
      {
        "label" : "Group B" ,
        "value" : -8.0961543492239
      } ,
      {
        "label" : "Group C" ,
        "value" : -0.57072943117674
      } ,
      {
        "label" : "Group D" ,
        "value" : -2.4174010336624
      } ,
      {
        "label" : "Group E" ,
        "value" : -0.72009071426284
      } ,
      {
        "label" : "Group F" ,
        "value" : -0.77154485523777
      } ,
      {
        "label" : "Group G" ,
        "value" : -0.90152097798131
      } ,
      {
        "label" : "Group H" ,
        "value" : -0.91445417330854
      } ,
      {
        "label" : "Group I" ,
        "value" : -0.055746319141851
      }
    ]
  },
  {
    key: 'Series2',
    color: '#1f77b4',
    values: [
      {
        "label" : "Group A" ,
        "value" : 25.307646510375
      } ,
      {
        "label" : "Group B" ,
        "value" : 16.756779544553
      } ,
      {
        "label" : "Group C" ,
        "value" : 18.451534877007
      } ,
      {
        "label" : "Group D" ,
        "value" : 8.6142352811805
      } ,
      {
        "label" : "Group E" ,
        "value" : 7.8082472075876
      } ,
      {
        "label" : "Group F" ,
        "value" : 5.259101026956
      } ,
      {
        "label" : "Group G" ,
        "value" : 0.30947953487127
      } ,
      {
        "label" : "Group H" ,
        "value" : 0
      } ,
      {
        "label" : "Group I" ,
        "value" : 0
      }
    ]
  },
  {
    key: 'Series3',
    color: '#2ca02c',
    values: [
      {
        "label" : "Group A" ,
        "value" : -25.307646510375
      } ,
      {
        "label" : "Group B" ,
        "value" : 16.756779544553
      } ,
      {
        "label" : "Group C" ,
        "value" : -18.451534877007
      } ,
      {
        "label" : "Group D" ,
        "value" : 8.6142352811805
      } ,
      {
        "label" : "Group E" ,
        "value" : -7.8082472075876
      } ,
      {
        "label" : "Group F" ,
        "value" : 5.259101026956
      } ,
      {
        "label" : "Group G" ,
        "value" : -0.30947953487127
      } ,
      {
        "label" : "Group H" ,
        "value" : 0
      } ,
      {
        "label" : "Group I" ,
        "value" : 0
      }
    ]
  }
];



long_short_pos_data = [
  {
    key: 'Series1',
    color: '#d62728',
    values: [
      {
        "label" : "Group A" ,
        "value" : 1.8746444827653
      } ,
      {
        "label" : "Group B" ,
        "value" : 8.0961543492239
      } ,
      {
        "label" : "Group C" ,
        "value" : 0.57072943117674
      } ,
      {
        "label" : "Group D" ,
        "value" : 2.4174010336624
      } ,
      {
        "label" : "Group E" ,
        "value" : 0.72009071426284
      } ,
      {
        "label" : "Group F" ,
        "value" : 0.77154485523777
      } ,
      {
        "label" : "Group G" ,
        "value" : 0.90152097798131
      } ,
      {
        "label" : "Group H" ,
        "value" : 0.91445417330854
      } ,
      {
        "label" : "Group I" ,
        "value" : 0.055746319141851
      }
    ]
  },
  {
    key: 'Series2',
    color: '#1f77b4',
    values: [
      {
        "label" : "Group A" ,
        "value" : 25.307646510375
      } ,
      {
        "label" : "Group B" ,
        "value" : 16.756779544553
      } ,
      {
        "label" : "Group C" ,
        "value" : 18.451534877007
      } ,
      {
        "label" : "Group D" ,
        "value" : 8.6142352811805
      } ,
      {
        "label" : "Group E" ,
        "value" : 7.8082472075876
      } ,
      {
        "label" : "Group F" ,
        "value" : 5.259101026956
      } ,
      {
        "label" : "Group G" ,
        "value" : 0.30947953487127
      } ,
      {
        "label" : "Group H" ,
        "value" : 0
      } ,
      {
        "label" : "Group I" ,
        "value" : 0
      }
    ]
  }
];


long_short_neg_data = [
  {
    key: 'Series1',
    color: '#d62728',
    values: [
      {
        "label" : "Group A" ,
        "value" : -1.8746444827653
      } ,
      {
        "label" : "Group B" ,
        "value" : -8.0961543492239
      } ,
      {
        "label" : "Group C" ,
        "value" : -0.57072943117674
      } ,
      {
        "label" : "Group D" ,
        "value" : -2.4174010336624
      } ,
      {
        "label" : "Group E" ,
        "value" : -0.72009071426284
      } ,
      {
        "label" : "Group F" ,
        "value" : -0.77154485523777
      } ,
      {
        "label" : "Group G" ,
        "value" : -0.90152097798131
      } ,
      {
        "label" : "Group H" ,
        "value" : -0.91445417330854
      } ,
      {
        "label" : "Group I" ,
        "value" : -0.055746319141851
      }
    ]
  },
  {
    key: 'Series2',
    color: '#1f77b4',
    values: [
      {
        "label" : "Group A" ,
        "value" : -25.307646510375
      } ,
      {
        "label" : "Group B" ,
        "value" : -16.756779544553
      } ,
      {
        "label" : "Group C" ,
        "value" : -18.451534877007
      } ,
      {
        "label" : "Group D" ,
        "value" : -8.6142352811805
      } ,
      {
        "label" : "Group E" ,
        "value" : -7.8082472075876
      } ,
      {
        "label" : "Group F" ,
        "value" : -5.259101026956
      } ,
      {
        "label" : "Group G" ,
        "value" : -0.30947953487127
      } ,
      {
        "label" : "Group H" ,
        "value" : 0
      } ,
      {
        "label" : "Group I" ,
        "value" : 0
      }
    ]
  }
];




var chart2;

nv.addGraph(function() {
  chart2 = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 50, left: 175})
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
