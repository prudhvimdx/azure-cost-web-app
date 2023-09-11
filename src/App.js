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
      const top10Services = data
                                .sort((a, b) => b.price - a.price) // Sort in descending order
                                .slice(0, 10); // Take the top 10

    </div>
  );
}

export default App;
