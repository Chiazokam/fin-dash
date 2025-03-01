import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
        border: {
            display: true,
            dash: [5, 5]
        },
    },
    y: {
        ticks: {
            stepSize: 200,
        },
        border: {
            display: true,
            dash: [5, 5]
        }
    }
  },
  elements: {
    line: {
      tension: 0.35
    },
    point: {
        pointStyle: false as const
    }
  },
};


export const data = {
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: {
        'Jul': 100,
        'Aug': 200,
        'Sep': 500,
        'Oct': 350,
        'Nov': 200,
        'Dec': 700,
        'Jan': 350
      },
      borderColor: '#1814F3',
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(45, 96, 255, 0.5)");
        gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
        return gradient;
      },
    },
  ],
};

export const AreaChart = () => {
  return <Line options={options} width='50%'  data={data} />;
}
