import React from 'react';

function ServiceList({ top10Services, totalPriceTillNow, expectedPriceByMonthEnd }) {
  return (
    <div>
      <div>
        <h2>Total Price Till Now</h2>
        <p>${totalPriceTillNow}</p>
      </div>
      <div>
        <h2>Expected Price by Month-End</h2>
        <p>${expectedPriceByMonthEnd}</p>
      </div>
      <h2>Top 10 Services by Price</h2>
      <ul>
        <li>
          <strong>Consumed Service Price Product Resource Group</strong>
        </li>
        {top10Services.map((service, index) => (
          <li key={index}>
            {service.name}  ${service.price}  {service.desc}  {service.resource_group}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
