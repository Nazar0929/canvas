import { Chart } from 'chart.js/auto';

const data = {
  labels: [
    'Social Media',
    'Search Engines',
    'Direct Visits'
  ],
  datasets: [{
    label: 'Website Traffic Sources',
    data: [120, 200, 80],
    backgroundColor: [
      'rgb(75, 192, 192)',   
      'rgb(255, 159, 64)',  
      'rgb(153, 102, 255)'  
    ],
    hoverOffset: 8
  }]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Website Traffic Sources (October 2025)'
      },
      legend: {
        position: 'right'
      }
    }
  }
};

const canvasElDoughnut = document.getElementById("myChartDoughnut");
const doughnutChart = new Chart(canvasElDoughnut, config);
