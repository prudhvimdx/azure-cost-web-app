import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('YOUR_API_ENDPOINT')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  return (
    <div>
      <ServiceList
        top10Services={top10Services}
        totalPriceTillNow={totalPriceTillNow}
        expectedPriceByMonthEnd={expectedPriceByMonthEnd}
      />

    </div>
  );
}

export default App;
