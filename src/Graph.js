import React from 'react';
import { Bar } from 'react-chartjs-2';

function Graph({ data }) {
  // Data for the graph
  const chartData = {
    labels: data.map((service) => service.name),
    datasets: [
      {
        label: 'Price',
        data: data.map((service) => service.price),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default Graph;
