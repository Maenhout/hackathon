import axios from 'axios';
import { useEffect, useState } from 'react';
import SswapWanted from './Style';

export default function SwapWanted() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/wantedservice`).then(({ data }) => {
      setRequests(data);
    });
  }, []);

  return (
    <SswapWanted>
      <h1>{requests.length} swaps available</h1>
      <div className="container">
        {requests.map((request) => {
          return (
            <div className="description">
              <h2>{request.username}</h2>

              <h3>{request.label}</h3>
              <p>{request.textWanted}</p>
            </div>
          );
        })}
      </div>
    </SswapWanted>
  );
}
