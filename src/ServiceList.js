import React from 'react';

function ServiceList({ top10Services, totalPriceTillNow, expectedPriceByMonthEnd }) {
  return (
    <div>
      <h2>Top 10 Services by Price</h2>
      <ul>
        {top10Services.map((service, index) => (
          <li key={index}>
            {service.name}: ${service.price}
          </li>
        ))}
      </ul>
      <div>
        <h2>Total Price Till Now</h2>
        <p>${totalPriceTillNow}</p>
      </div>
      <div>
        <h2>Expected Price by Month-End</h2>
        <p>${expectedPriceByMonthEnd}</p>
      </div>
    </div>
  );
}

export default ServiceList;
