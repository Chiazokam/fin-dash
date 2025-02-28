import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 400, 300, 250, 400, 400, 500],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      categoryPercentage: 0.4
    },
    {
      label: 'Dataset 2',
      data: [100, 400, 300, 250, 400, 400, 500],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      categoryPercentage: 0.4
    },
  ],
};

export const BarChart2 = () => {
  return <Bar options={options} data={data} />;
}
