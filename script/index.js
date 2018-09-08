google.charts.load('upcoming', {
  packages: ['corechart', 'bar'],
  mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

google.charts.setOnLoadCallback(drawEmploymentStatusChart);
google.charts.setOnLoadCallback(drawEmploymentLevelOfDegreeChart);
google.charts.setOnLoadCallback(drawEmploymentStatusByGender);
google.charts.setOnLoadCallback(drawSalaryChart);
google.charts.setOnLoadCallback(drawSalaryDistributionChart);
google.charts.setOnLoadCallback(drawGraduateGotJobsChart);
google.charts.setOnLoadCallback(drawGraduatesWelfareChart);
google.charts.setOnLoadCallback(drawNairaForeignCurrencyChart);
google.charts.setOnLoadCallback(drawMediumOfCommuteChart);
google.charts.setOnLoadCallback(drawEmployingIndustriesChart);
google.charts.setOnLoadCallback(drawEducationSatisfactionChart);
google.charts.setOnLoadCallback(drawEmployabilitySkillsChart);

//Employment Status chart
function drawEmploymentStatusChart() {
  var data = google.visualization.arrayToDataTable([
    ['Employment Status', 'Hours per Day'],
    ['Working Full time', 1371],
    ['Voluntary or unpaid internship', 417],
    ['Self Employed or Freelance', 700],
    ['NYSC', 842],
    ['Unemployed', 1509],
    ['Engaged/ Preparing for Further Studies', 380]
  ]);

  var options = {
    title: 'Employment Status',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black',
      size: '2px'
    },
    legend: { position: 'top', alignment: 'end', maxLines: 10 },
    // backgroundColor: { strokeWidth: 50 },
    colors: ['#2d6e64', '#53c0b6', '#f7ba44', '#f3963e', '#f06e38', '#123530']
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('employment-chart')
  );
  chart.draw(data, options);
}

//Level of Employment by degree
function drawEmploymentLevelOfDegreeChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Degree');
  data.addColumn('number', 'Working full Time');
  data.addColumn('number', 'Voluntary/Internship');
  data.addColumn('number', 'Self Employed');
  data.addColumn('number', 'NYSC');
  data.addColumn('number', 'Preparing for Further studies');
  data.addColumn('number', 'Unemployed');

  data.addRows([
    [{ v: 'OND', f: 'OND' }, 12, 16, 18, 0, 23, 47],
    [{ v: 'HND', f: 'HND' }, 71, 13, 73, 58, 8, 145],
    [
      { v: 'BACHELOR DEGREE', f: 'BACHELOR DEGREE' },
      1158,
      366,
      548,
      778,
      294,
      1258
    ],
    [{ v: 'MASTERS', f: 'MASTERS DEGREE' }, 118, 21, 54, 5, 53, 55],
    [{ v: 'MBA', f: 'MBA' }, 10, 0, 5, 1, 1, 3],
    [{ v: 'PHD', f: 'PHD' }, 2, 1, 2, 0, 1, 1]
  ]);

  var options = {
    title: 'Employment status  by level of degree chart',
    isStacked: 'percent',
    hAxis: {
      title: 'Degree',
      textPosition: 'out'
    },
    colors: ['#123530', '#2d6e64', '#53c0b6', '#f7ba44', '#f3963e', '#f06e38'],
    vAxis: {
      gridlines: { color: '#fff', count: 4 },
      scaleType: null,
      width: 1000
    },
    legend: {
      position: 'right'
    },
    bar: { groupWidth: '30%' }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('emp-by-degree-chart')
  );
  chart.draw(data, options);
}

//Level of Employment by Gender
function drawEmploymentStatusByGender() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'MALE');
  data.addColumn('number', 'FEMALE');

  data.addRows([
    [{ v: 'Working Full Time', f: 'Working Full Time' }, 3257, 1962],
    [{ v: 'Working Full Time', f: 'Unemployed' }, 3100, 2199],
    [
      { v: 'Working Full Time', f: 'Preparing for Further Studies' },
      3580,
      1639
    ],
    [{ v: 'Working Full Time', f: 'Engaged in Further Studies' }, 3176, 2041]
  ]);

  var options = {
    title: 'Employment status  by Gender',
    isStacked: 'percent',
    hAxis: {
      textPosition: 'out'
    },
    colors: ['#54c3b6', '#f3993e'],

    vAxis: {
      gridlines: { color: '#fff', count: 4 },
      scaleType: null,
      width: 1000
    },
    legend: {
      position: 'right'
    },
    bar: { groupWidth: '50%' }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('emp-by-gender-chart')
  );

  chart.draw(data, options);
}

// STARTING & CURRENT SALARY BY GENDER
function drawSalaryChart() {
  under20kPieCharts();
  above20under49PieCharts();
  above49under99PieCharts();
  above100under149PieCharts();
  above149under199PieCharts();
  above200under249PieCharts();
  above250PieCharts();
}

//salary distribution
function drawSalaryDistributionChart() {
  var data = google.visualization.arrayToDataTable([
    ['Salary', 'Starting Salary Percentage', 'Current Salary Percentage'],
    ['Under ₦20,000', 22.32, 13.59],
    ['₦20,000-₦49,000', 38.14, 27.6],
    ['₦50,000-₦99,000', 26.34, 29.95],
    ['₦100,000 -₦199,000', 10.34, 20.35],
    ['₦200,000 and Above', 2.86, 8.35]
  ]);

  var options = {
    chart: {
      title: 'Salary Distribution',
      fontSize: 20
    },
    colors: ['#f06e38', '#123530'],
    orientation: 'vertical',
    hAxis: {
      // baselineColor: 'red',
      // baseline: 0
      format: null,
      gridlines: { color: 'transparent', count: 3 }
      // fontSize: 100
    },
    vAxis: {
      //   baselineColor: 'green',
      //   // gridlines: { color: 'green', count: 8 }
      textStyle: {
        fontSize: 16,
        color: 'black'
      }
    },
    legend: {
      position: 'top',
      alignment: 'end',
      maxLines: 10,
      textStyle: { color: 'black', fontSize: 16 }
    }
  };

  var chart = new google.charts.Bar(
    document.getElementById('salary-distribution')
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

// HOW GRADUATES GOT THE JOBS
function drawGraduateGotJobsChart() {
  var data = google.visualization.arrayToDataTable([
    ['How Graduates got their jobs', 'Hours per Day'],
    ['Internship', 220],
    ['Employers Website', 95],
    ['Personal Contact', 1448],
    ['Social media/professional networking sites', 639],
    ['University / polytechnic(e.g.Careers Service, lecturer, website)', 151],
    ['Recruitment agency/Online job site', 612],
    ['Media', 267]
  ]);

  var options = {
    title: 'How Graduates got their Jobs',
    // pieHole: 0.1,
    pieSliceTextStyle: {
      color: 'white',
      bold: true
    },
    colors: [
      '#66d9d1',
      '#347d70',
      '#668782',
      '#123530',
      '#54c3b6',
      '#2d6e61',
      '#4d736d'
    ],

    fontSize: 16,
    is3D: true,
    legend: { position: 'top', alignment: 'end', maxLines: 10 },
    slices: {
      1: { offset: 0.3 },
      4: { offset: 0.3 }
    }
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('graduate-got-jobs')
  );
  chart.draw(data, options);
}

// GRADUATES WELFARE
function drawGraduatesWelfareChart() {
  var data = google.visualization.arrayToDataTable([
    ['Count', 'Rate'],
    ['Yes: From my first job', 271],
    ['No: From my current job', 466],
    ['No', 2965]
  ]);

  var options = {
    title: "ability to rent an apartment or buy a car from first job's salary",
    pieHole: 0.9,
    pieSliceTextStyle: {
      color: 'black',
      bold: true
    },
    colors: ['#007162', '#00c7b8', '#ff9700'],

    fontSize: 16,
    // is3D: true,
    legend: { position: 'top', alignment: 'end', maxLines: 10 }
    // slices: {
    //   1: { offset: 0.3 },
    //   4: { offset: 0.3 }
    // }
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('rent-car-from-salary')
  );
  chart.draw(data, options);
}

// NAIRA AND FOREIGN CURRENCY EARNERS
function drawNairaForeignCurrencyChart() {
  var data = google.visualization.arrayToDataTable([
    ['Count', 'Rate'],
    ['Foreign Currency ', 55],
    ['Naira', 3377]
  ]);

  var options = {
    title: 'NAIRA AND FOREIGN CURRENCY EARNERS',
    // pieHole: 0.2,
    pieSliceTextStyle: {
      color: 'black',
      bold: true
    },
    colors: ['#007162', '#00c7b8'],
    fontSize: 16,
    is3D: true,
    legend: { position: 'top', alignment: 'end', maxLines: 10 },
    slices: {
      1: { offset: 0.1 }
      //   4: { offset: 0.3 }
    },
    pieStartAngle: 100
  };
  var chart = new google.visualization.PieChart(
    document.getElementById('naira-foreign-earners')
  );
  chart.draw(data, options);
}

// MEDIUM OF COMMUTING TO WORK
function drawMediumOfCommuteChart() {
  var data = google.visualization.arrayToDataTable([
    ['Transport mode', 'Rate'],
    ['Water / Ferry', 2],
    ['Bicycle', 11],
    ['Motorcycle', 216],
    ['Walking', 175],
    ['Keke', 273],
    ['Car', 374],
    ['Uber/Taxify/Taxi services', 90],
    ['BRT', 243],
    ['Commercial Vehicle ', 2045]
  ]);

  var options = {
    title: 'Medium of Commuting to work',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black',
      bold: true
    },
    colors: [
      '#ba491a',
      '#062f27',
      '#54c2b4',
      '#426764',
      '#46a6a1',
      '#f7b844',
      '#ba9154',
      '#9c4521',
      '#2d6e61'
    ],

    fontSize: 16,
    // is3D: true,
    legend: { position: 'top', alignment: 'end', maxLines: 10 }
    // slices: {
    //   1: { offset: 0.1 }
    //   //   4: { offset: 0.3 }
    // },
    // pieStartAngle: 100
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('medium-of-commuting')
  );
  chart.draw(data, options);
}

//Employing Industries
function drawEmployingIndustriesChart() {
  var data = google.visualization.arrayToDataTable([
    ['Industries', 'First Job', 'Later Job'],
    ['Technology', 10.47, 11.12],
    ['Media', 8.72, 10.57],
    ['Consulting', 5.51, 5.44],
    ['Retail / Wholesales', 3.67, 3.32],
    ['Healthcare', 4.72, 5.32],
    ['Education', 15.08, 12.33],
    ['Banking / Financial Services', 11.93, 11.78],
    ['Engineering', 4.4, 4.89],
    ['Others', 4.43, 4.89],
    ['Hospitality / Leisure', 2.77, 2.96],
    ['Government / Defence', 1.95, 1.69],
    ['Construction / Real Estate', 4.96, 4.53],
    ['NGO', 2.71, 2.96],
    ['Agriculture / Poultry / Fishing', 1.81, 1.75],
    ['Legal', 2.27, 1.93],
    ['Oil & Gas / Mining', 2.95, 2.72],
    ['Telecommunications', 5.28, 4.53],
    ['Logistics / Transpo rtation', 1.57, 1.63],
    ['FMCG', 3.59, 3.93],
    ['Blue Collar', 0.17, 0.66],
    ['Food Services', 1.02, 1.03]
  ]);

  var options = {
    chart: {
      title: 'Employing Industries'
    },
    colors: ['#2d6e61'],
    orientation: 'vertical',
    hAxis: {
      baselineColor: 'black',
      gridlines: { color: 'transparent' }
    },
    bar: { width: 200 },

    // chartArea: { width: '150%', height: '15%' },
    vAxis: {
      //   baselineColor: 'green',
      //   // gridlines: { color: 'green', count: 8 }
      textStyle: {
        fontSize: 15,
        color: 'black'
      }
    },

    isStacked: true,
    legend: { textStyle: { color: 'black', fontSize: 15 } }
  };

  var chart = new google.charts.Bar(
    document.getElementById('employing-industries')
  );

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//EDUCATION SATISFACTION;
function drawEducationSatisfactionChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Degree');
  data.addColumn('number', 'Employed');
  data.addColumn('number', 'Further Studies');

  data.addRows([
    [{ v: 'Strongly Disagree', f: 'Strongly Disagree' }, 410, 160],
    [{ v: 'Disagree', f: 'Disagree' }, 639, 292],
    [{ v: 'Agree', f: 'Agree' }, 1573, 1686],
    [{ v: 'Strongly Agree', f: 'Strongly Agree' }, 807, 1291]
  ]);

  var options = {
    title: 'Employment status  by level of degree chart',
    // isStacked: 'percent',
    hAxis: {
      textPosition: 'out'
    },
    colors: ['#2d6e61', '#54c3b6'],
    vAxis: {
      gridlines: { color: '#fff', count: 4 },
      scaleType: null
      // width: 1000
    },
    legend: {
      position: 'right'
    },

    bar: { groupWidth: '30%' }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('education-satisfaction')
  );
  chart.draw(data, options);

  // var chart = new google.charts.Bar(
  // document.getElementById('education-satisfaction')
  // );

  // chart.draw(data, google.charts.Bar.convertOptions(options));
}

//Employability Skills;
function drawEmployabilitySkillsChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Ability');
  data.addColumn('number', 'Percent');
  // data.addColumn('number', 'Further Studies');

  data.addRows([
    [{ v: 'Critical thinking skills', f: 'Critical thinking skills' }, 55.2],
    [
      {
        v: 'Ability to solve complex problems',
        f: 'Ability to solve complex problems'
      },
      48.5
    ],
    [
      { v: 'Ability to work with others', f: 'Ability to work with others' },
      54.7
    ],
    [
      { v: 'Written communication skills', f: 'Written communication skills' },
      45.6
    ],
    [
      { v: 'Spoken communication skills', f: 'Spoken communication skills' },
      43.3
    ],
    [
      {
        v: 'Knowledge of the sk',
        f: 'Knowledge of the skill(s) you are studying'
      },
      41.9
    ],
    [{ v: 'None of the above', f: 'None of the above' }, 7.6]
  ]);

  var options = {
    title: 'Employability Skills',
    // isStacked: 'percent',
    hAxis: {
      textPosition: 'out',
      // slantedText: true,
      slantedTextAngle: 20
      // maxTextLines: 1,
      // maxAlternation: 1
    },
    colors: [
      // '#123530',
      '#2d6e61',
      '#54c3b6',
      '#46a6a1',
      '#456b69',
      '#59cdc2',
      '#347d70'
    ],
    vAxis: {
      gridlines: { color: '#fff', count: 4 },
      scaleType: null
      // width: 1000
    },
    legend: {
      position: 'none'
    },

    bar: { groupWidth: '30%' }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('employability-skills')
  );
  chart.draw(data, options);

  // var chart = new google.charts.Bar(
  // document.getElementById('education-satisfaction')
  // );

  // chart.draw(data, google.charts.Bar.convertOptions(options));
}

function under20kPieCharts() {
  //pie Data
  var under20kStartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 349],
    ['Female', 417]
  ]);

  var under20kCurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 94],
    ['Female', 131]
  ]);

  //pie options
  var under20kStartOptions = {
    title: 'Under ₦20,000',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var under20kCurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var under20kStartChart = new google.visualization.PieChart(
    document.getElementById('under20kStart')
  );
  under20kStartChart.draw(under20kStartData, under20kStartOptions);

  var under20kCurrentChart = new google.visualization.PieChart(
    document.getElementById('under20kCurrent')
  );
  under20kCurrentChart.draw(under20kCurrentData, under20kCurrentOptions);
}

function above20under49PieCharts() {
  //pie Data
  var above20under49StartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 671],
    ['Female', 637]
  ]);

  var above20under49CurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 236],
    ['Female', 220]
  ]);

  //pie options
  var above20under49StartOptions = {
    title: '₦20,001 - ₦49, 999',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var above20under49CurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var above20under49StartChart = new google.visualization.PieChart(
    document.getElementById('above20under49Start')
  );
  above20under49StartChart.draw(
    above20under49StartData,
    above20under49StartOptions
  );

  var above20under49CurrentChart = new google.visualization.PieChart(
    document.getElementById('above20under49Current')
  );
  above20under49CurrentChart.draw(
    above20under49CurrentData,
    above20under49CurrentOptions
  );
}

function above49under99PieCharts() {
  //pie Data
  var above49under99StartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 471],
    ['Female', 433]
  ]);

  var above49under99CurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 239],
    ['Female', 257]
  ]);

  //pie options
  var above49under99StartOptions = {
    title: '₦50,000 - ₦99,999',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var above49under99CurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var above49under99StartChart = new google.visualization.PieChart(
    document.getElementById('above49under99Start')
  );
  above49under99StartChart.draw(
    above49under99StartData,
    above49under99StartOptions
  );

  var above49under99CurrentChart = new google.visualization.PieChart(
    document.getElementById('above49under99Current')
  );
  above49under99CurrentChart.draw(
    above49under99CurrentData,
    above49under99CurrentOptions
  );
}

function above100under149PieCharts() {
  //pie Data
  var above100under149StartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 148],
    ['Female', 99]
  ]);

  var above100under149CurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 134],
    ['Female', 86]
  ]);

  //pie options
  var above100under149StartOptions = {
    title: '₦100,000 - ₦149,999',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var above100under149CurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var above100under149StartChart = new google.visualization.PieChart(
    document.getElementById('above100under149Start')
  );
  above100under149StartChart.draw(
    above100under149StartData,
    above100under149StartOptions
  );

  var above100under149CurrentChart = new google.visualization.PieChart(
    document.getElementById('above100under149Current')
  );
  above100under149CurrentChart.draw(
    above100under149CurrentData,
    above100under149CurrentOptions
  );
}

function above149under199PieCharts() {
  //pie Data
  var above149under199StartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 67],
    ['Female', 41]
  ]);

  var above149under199CurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 71],
    ['Female', 46]
  ]);

  //pie options
  var above149under199StartOptions = {
    title: '₦150,000 - ₦199,999',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var above149under199CurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var above149under199StartChart = new google.visualization.PieChart(
    document.getElementById('above149under199Start')
  );
  above149under199StartChart.draw(
    above149under199StartData,
    above149under199StartOptions
  );

  var above149under199CurrentChart = new google.visualization.PieChart(
    document.getElementById('above149under199Current')
  );
  above149under199CurrentChart.draw(
    above149under199CurrentData,
    above149under199CurrentOptions
  );
}

function above200under249PieCharts() {
  //pie Data
  var above200under249StartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 33],
    ['Female', 17]
  ]);

  var above200under249CurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 34],
    ['Female', 17]
  ]);

  //pie options
  var above200under249StartOptions = {
    title: '₦200,000 - ₦249,999',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var above200under249CurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var above200under249StartChart = new google.visualization.PieChart(
    document.getElementById('above200under249Start')
  );
  above200under249StartChart.draw(
    above200under249StartData,
    above200under249StartOptions
  );

  var above200under249CurrentChart = new google.visualization.PieChart(
    document.getElementById('above200under249Current')
  );
  above200under249CurrentChart.draw(
    above200under249CurrentData,
    above200under249CurrentOptions
  );
}

function above250PieCharts() {
  //pie Data
  var above250StartData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 33],
    ['Female', 15]
  ]);

  var above250CurrentData = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['Male', 64],
    ['Female', 26]
  ]);

  //pie options
  var above250StartOptions = {
    title: '₦250,000 and more',
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: true,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  var above250CurrentOptions = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black'
    },
    legend: false,
    // backgroundColor: { strokeWidth: 10 },
    colors: ['#54c3b6', '#f3993e'],
    fontSize: 15
    // forceIFrame: true
  };

  // drawing the pie
  var above250StartChart = new google.visualization.PieChart(
    document.getElementById('above250Start')
  );
  above250StartChart.draw(above250StartData, above250StartOptions);

  var above250CurrentChart = new google.visualization.PieChart(
    document.getElementById('above250Current')
  );
  above250CurrentChart.draw(above250CurrentData, above250CurrentOptions);
}

$(window).resize(function() {
  drawEmploymentStatusChart(),
    drawEmploymentLevelOfDegreeChart(),
    drawEmploymentStatusByGender(),
    drawSalaryChart(),
    drawSalaryDistributionChart(),
    drawGraduateGotJobsChart(),
    drawGraduatesWelfareChart(),
    drawNairaForeignCurrencyChart(),
    drawMediumOfCommuteChart(),
    drawEmployingIndustriesChart(),
    drawEducationSatisfactionChart(),
    drawEmployabilitySkillsChart();
});
