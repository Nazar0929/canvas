import { Chart } from 'chart.js/auto';
const data = {
  labels: [
    'Europe',
    'Asia',
    'North America',
    'South America',
    'Africa'
  ],
  datasets: [{
    label: 'Sales (in millions)',
    data: [45, 60, 30, 20, 10],
    backgroundColor: [
      'rgb(255, 99, 132)',   
      'rgb(75, 192, 192)', 
      'rgb(255, 205, 86)',   
      'rgb(201, 203, 207)',  
      'rgb(54, 162, 235)'   
    ]
  }]
};

const config = {
  type: 'polarArea',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Sales by Region (2025)'
      },
      legend: {
        position: 'right'
      }
    }
  }
};

const canvasElDou = document.getElementById("myChartCanvas");
const canvasCharts = new Chart(canvasElDou, config);
