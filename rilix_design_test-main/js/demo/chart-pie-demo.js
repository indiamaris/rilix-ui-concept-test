// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Chihuahua Contrataca", "Perro Revolution", "A dino Eating you", "my michele", "my moomy", "Aquela Ursa","Bad HUmor", "two cats", "four cats", "nine cats",  "ten cats",  "the cats",  "all cats",  "black cats",  "blue cats",  ],
    datasets: [{
      data: [105, 55, 30, 15,1,2,3,4,5,10,6,9,1,12,12],
      backgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f6c23e', '#e74a3b', '#2e59d9', '#17a673', '#2c9faf', '#f6c23e', '#e74a3b','#2e59d9', '#17a673', '#2c9faf', '#f6c23e', '#e74a3b'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#f6c23e', '#e74a3b', '#2e59d9', '#17a673', '#2c9faf', '#f6c23e', '#e74a3b','#2e59d9', '#17a673', '#2c9faf', '#f6c23e', '#e74a3b'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
