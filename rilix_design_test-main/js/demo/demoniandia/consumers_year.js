


//fake data 

var data  = [
    {
        month: 'jan', nested:
            { count: 10, countB: 290, countD: 870, countE: 20, countF: 780, countG: 200, countH: 200, countI: 200, countJ: 200, countK: 200, countL: 200 }
    },
    {
        month: 'fev', nested:
            { count: 23, countB: 200, countD: 200, countE: 20, countF: 200, countG: 200, countH: 200, countI: 200, countJ: 60, countK: 200, countL: 200 }
    },
    {
        month: 'mar', nested:
            { count: 70, countB: 200, countD: 26, countE: 200, countF: 200, countG: 200, countH: 200, countI: 200, countJ: 20, countK: 200, countL: 200 }
    },
        {
        month: 'apr', nested:
            { count: 120, countB: 40, countD: 20, countE: 200, countF: 500, countG: 700, countH: 200, countI: 200, countJ: 70, countK: 600, countL: 800 }
    },
    {
        month: 'jun', nested:
            { count: 150, countB: 340, countD: 20, countE: 700, countF: 500, countG: 270, countH: 900, countI: 120, countJ: 20, countK: 260, countL: 987 }
    },
    {
        month: 'july', nested:
            { count: 40, countB: 670, countD: 950, countE: 900, countF: 500, countG: 290, countH: 900, countI: 190, countJ: 760, countK: 260, countL: 890 }
    },
    {
        month: 'aug', nested:
            { count: 30, countB: 23, countD: 650, countE: 270, countF: 290, countG: 223, countH: 200, countI: 200, countJ: 890, countK: 200, countL: 600 }
    },
    {
        month: 'sep', nested:
            { count: 15, countB: 230, countD: 25, countE: 200, countF: 900, countG: 20, countH: 200, countI: 270, countJ: 200, countK: 340, countL: 500 }
    },
    {
        month: 'oct', nested:
            { count: 10, countB: 70, countD: 260, countE: 243, countF: 290, countG: 26, countH: 980, countI: 130, countJ: 20, countK: 90, countL: 700 }
    },
    {
        month: 'nov', nested:
            { count: 145, countB: 200, countD: 270, countE: 900, countF: 600, countG: 400, countH: 200, countI: 800, countJ: 290, countK: 200, countL: 900 }
    },
    {
        month: 'dec', nested:
            { count: 10, countB: 12, countD: 890, countE: 100, countF: 200, countG: 270, countH: 200, countI: 60, countJ: 50, countK: 20, countL: 90 }
    },
]
  
//fim fake data
var ctx = document.getElementById('consumers_year')
 
var consumers = new Chart(ctx,   {
  type: 'bar', responsive:true,
  
      data: {
        labels: data.map(row => row.month), 
        
        datasets: [
          {
            label: 'Disney Orlando',
                 backgroundColor: "#ffb800",
      hoverBackgroundColor: "#ffb800",
      borderColor: "#ffb800",
             barThickness: 6
             ,
            data: data.map(row => row.nested.count)
          },
          {
             backgroundColor: "red",
      hoverBackgroundColor: "#red",
      borderColor: "#red",
            label: 'Disney France',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countB)
          }
          ,
          {
             backgroundColor: "#FFCCFF",
      hoverBackgroundColor: "#FFCCFF",
      borderColor: "#FFCCFF",
            label: 'Disney Itajai',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countC)
          }
          ,
          {
             backgroundColor: "pink",
      hoverBackgroundColor: "pink",
      borderColor: "pink",
            label: ' Beto Carreiro',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countD)
          }
          ,
          {
             backgroundColor: "#CCE5FF",
      hoverBackgroundColor: "#CCFFFF",
      borderColor: "#CCFFFF",
            label: 'Loja do Zeh',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countE)
          }
          ,
          {
             backgroundColor: "#55ff00",
      hoverBackgroundColor: "#55ff00",
      borderColor: "#55ff00",
            label: 'BC Shopping',
             barThickness: 6,
            data: data.map(row => row.nested.countF)
          }
          ,
          {
             backgroundColor: "#ff00fc",
      hoverBackgroundColor: "#ff00fc",
      borderColor: "#ff00fc",
            label: 'Camelo',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countG)
          }
          ,
          {
                backgroundColor: "#00ffa7",
      hoverBackgroundColor:"#00ffa7",
      borderColor: "#00ffa7",
            label: 'Rocinha',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countH)
          }
          ,
          {
             backgroundColor: "#4e73df",
      hoverBackgroundColor: "#4e73df",
      borderColor: "#4e73df",
            label: 'Holywod',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countI)
          }
          ,
          {
             backgroundColor: "#00fffb",
      hoverBackgroundColor: "#00fffb",
      borderColor: "#00fffb",
            label: 'casa de lares',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countJ)
          }
           ,
          {
             backgroundColor: "#c4ff00",
      hoverBackgroundColor: "#c4ff00",
      borderColor: "#c4ff00",
            label: 'Indialandia',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countH)
          },
          {
             backgroundColor: "#2e59d9",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#2e59d9",
            label: 'Ali do lado',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countK)
          },
          {
             backgroundColor: "#ff007a",
      hoverBackgroundColor:  "#ff007a",
      borderColor: "#ff007a",
            label: 'Adilsonlandia',
             barThickness: 6
             ,
            data: data.map(row => row.nested.countL)
          }, 
        ] },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 10,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '$' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 12,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }, 
 
});
 