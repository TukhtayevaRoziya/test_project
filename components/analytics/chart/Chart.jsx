import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
  labels: ['Red', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [6, 2],
      backgroundColor: [
        '#FEBF3E',
        '#943740'
      ],
      borderColor: [
        '#FEBF3E',
        '#943740'
      ],
      borderWidth: 1,
    },
  ],
};

export const AChart = () => {
  return <Doughnut data={data} />;
}