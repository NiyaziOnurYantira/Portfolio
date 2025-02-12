import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const StatusPieChart = ({ data }) => {
  const statuses = data.patents.map((patent) => patent.status);

  const statusCounts = statuses.reduce((acc, status) => {
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(statusCounts);
  const counts = Object.values(statusCounts);

  const pieData = {
    labels,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8AFF33',
          '#FF33F6'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8AFF33',
          '#FF33F6'
        ],
      },
    ],
  };

  return (
    <div style={{ maxWidth: '200px', margin: '2rem auto' }}>
      <h2>Patent Status</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default StatusPieChart;
