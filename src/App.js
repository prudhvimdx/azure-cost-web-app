import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceList from './ServiceList';
// import Graph from './Graph';
function App() {

  const [data, setData] = useState({'billing_details':[], 'total_projected_amount': 0, 'total_cost_in_usd': 0});
  const [isLoading, setIsLoading] = useState(true);
  const [loadAll, setLoadAll] = useState(false);

  useEffect(() => {
    // Make an Axios GET request
      axios.get('http://localhost:5000/billing_graph')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const loadAllServices = () => {
    setLoadAll(true);
  };


  return (

    <div>
      {isLoading ? (
        // Display a loading symbol while isLoading is true
        <div>Loading...</div>
      ) : (
        <div>
         <ServiceList
          top10Services={loadAll ? data['billing_details'] : data['billing_details'].slice(0,10)}
          totalPriceTillNow={data['total_cost_in_usd']}
          expectedPriceByMonthEnd={data['total_projected_amount']}
        />
        <button onClick={loadAllServices}>Load All</button>
        {/* <Graph/> */}
        </div>
      )}
    </div>

  );
}

export default App;
