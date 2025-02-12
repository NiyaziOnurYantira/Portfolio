import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const StatusPieChart = ({ data, tradesecrets, copyrights, softwareLicenses }) => {
  // Patentler için status dağılımı
  const patentStatuses = data.patents.map((patent) => patent.status);
  const statusCounts = patentStatuses.reduce((acc, status) => {
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const statusLabels = Object.keys(statusCounts);
  const statusData = Object.values(statusCounts);

  const statusPieData = {
    labels: statusLabels,
    datasets: [
      {
        data: statusData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // TradeSecrets kategorileri için dağılım
  const categories = tradesecrets.map((secret) => secret.category);
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const categoryLabels = Object.keys(categoryCounts);
  const categoryData = Object.values(categoryCounts);

  const categoryPieData = {
    labels: categoryLabels,
    datasets: [
      {
        data: categoryData,
        backgroundColor: ['#FF5733', '#8AFF33', '#FF33F6', '#FF5733'],
        hoverBackgroundColor: ['#FF5733', '#8AFF33', '#FF33F6', '#FF5733'],
      },
    ],
  };

  // Copyright type için dağılım
  const copyrightTypes = copyrights.map((copyright) => copyright.type);
  const typeCounts = copyrightTypes.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const typeLabels = Object.keys(typeCounts);
  const typeData = Object.values(typeCounts);

  const typePieData = {
    labels: typeLabels,
    datasets: [
      {
        data: typeData,
        backgroundColor: ['#FF5733', '#8AFF33', '#FF33F6', '#FF5733', '#9A33FF'],
        hoverBackgroundColor: ['#FF5733', '#8AFF33', '#FF33F6', '#FF5733', '#9A33FF'],
      },
    ],
  };

  // Software Licenses type için dağılım
  const licenseTypes = softwareLicenses.map((license) => license.licenseType);
  const licenseCounts = licenseTypes.reduce((acc, licenseType) => {
    acc[licenseType] = (acc[licenseType] || 0) + 1;
    return acc;
  }, {});

  const licenseLabels = Object.keys(licenseCounts);
  const licenseData = Object.values(licenseCounts);

  const licensePieData = {
    labels: licenseLabels,
    datasets: [
      {
        data: licenseData,
        backgroundColor: ['#FFD700', '#8A2BE2', '#7FFF00', '#FF4500'],
        hoverBackgroundColor: ['#FFD700', '#8A2BE2', '#7FFF00', '#FF4500'],
      },
    ],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '2rem' }}>
      {/* Patent Status Pie Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', marginBottom: '2rem' }}>
        <h3>Patent Status Distribution</h3>
        <Pie data={statusPieData} />
      </div>
      {/* Copyright Type Pie Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', marginBottom: '2rem' }}>
        <h3>Copyright Type Distribution</h3>
        <Pie data={typePieData} />
      </div>
      {/* TradeSecrets Category Pie Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', marginBottom: '2rem' }}>
        <h3>Trade Secrets Category Distribution</h3>
        <Pie data={categoryPieData} />
      </div>
      {/* Software License Type Pie Chart */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '300px', marginBottom: '2rem' }}>
        <h3>Software License Type Distribution</h3>
        <Pie data={licensePieData} />
      </div>
    </div>
  );
};

export default StatusPieChart;
