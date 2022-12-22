import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [300, 50, 100, 20],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(159, 226, 191)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = { cutout: '70%' };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
