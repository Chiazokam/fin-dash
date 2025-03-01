import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  // ChartOptions
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
        display: true,
        position: 'top' as const,
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          borderRadius: 7,
          useBorderRadius: true,
          font: {
            size: 15
          },
        },
        align: 'end' as const
      },
  },
  scales: {
    x: {
        grid: {
            display: false,
        },
        offset: true
    },
    y: {
        ticks: {
            stepSize: 100,
        },
        border: {
            display: false
        }
    }
  },
};

const data = {
  datasets: [
    {
      label: 'Deposit',
        data: {
            Sat: 100,
            Sun: 400,
            Mon: 300,
            Tue: 250,
            Wed: 400,
            Thu: 400,
            Fri: 500
        },
      backgroundColor: '#232323',
      categoryPercentage: 0.7,
      barPercentage: 0.45,
      borderRadius: 10,
    },
    {
      label: 'Withdraw',
    data: {
        Sat: 100,
        Sun: 400,
        Mon: 300,
        Tue: 250,
        Wed: 400,
        Thu: 400,
        Fri: 500
    },
      backgroundColor: '#396AFF',
      categoryPercentage: 0.7,
      barPercentage: 0.45,
      borderRadius: 10,
    },
  ],
};

export const BarChart = () => {
  return <Bar options={options} width='40%' data={data} />;
}
