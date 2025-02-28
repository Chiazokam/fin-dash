import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
            display: false
        },
    },
}

export const data = {
  labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
  datasets: [
    {
      label: 'Expense statistics',
      data: [30, 15, 35, 20],
      offset: 30,
      backgroundColor: [
        '#343C6A',
        '#FC7900',
        '#232323',
        '#396AFF',
      ],
      borderColor: [
        '#343C6A',
        '#FC7900',
        '#232323',
        '#396AFF',
      ],
      borderWidth: 1,
    },
  ],
  dataLabels: ['nice']
};

export const PieChart = () => {
  return <Pie options={options} data={data} />;
}
