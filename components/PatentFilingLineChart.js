import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const PatentFilingLineChart = ({ items, dateField }) => {
  if (!items || !Array.isArray(items)) {
    return null;
  }

  // set year-month based application distribution.
  const filingsByYearMonth = items.reduce((acc, item) => {
    const date = new Date(item[dateField]);
    // Check avaliable date.
    if (isNaN(date.getTime())) return acc;
    const yearMonth = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}`;
    acc[yearMonth] = (acc[yearMonth] || 0) + 1;
    return acc;
  }, {});

  // label (year-month).
  const sortedLabels = Object.keys(filingsByYearMonth).sort();
  const dataCounts = sortedLabels.map(label => filingsByYearMonth[label]);

  // Set dataset of chart.js.
  const data = {
    labels: sortedLabels,
    datasets: [
      {
        label: `Application (${dateField})`,
        data: dataCounts,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2 style={{fontWeight: 'bold'}}>{dateField} Based Application Distribution</h2>
      <Line data={data} />
    </div>
  );
};

export default PatentFilingLineChart;
