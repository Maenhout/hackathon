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
      <h1>
        <i>{requests.length}</i> Swaps available
      </h1>
      <div className="container">
        {requests.map((request) => {
          return (
            <div className="profile">
              <div className="avatar" />
              <div className="description">
                <div className="title">
                  <h2>{request.username}</h2>
                  <div className="star">4,8 ★</div>
                </div>
                <h3>{request.label}</h3>
                <p>{request.textWanted}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SswapWanted>
  );
}
