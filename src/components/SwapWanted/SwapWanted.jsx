import axios from 'axios';
import { useEffect, useState } from 'react';
import SswapWanted from './Style';

export default function SwapWanted() {
  const [displayWanted, setDisplayWanted] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/wantedservice`).then(({ data }) => {
      setDisplayWanted(data);
    });
  }, []);

  return (
    <SswapWanted>
      <h1>Swap wanted</h1>
      {displayWanted.map((toto) => {
        return (
          <div>
            <h2>{toto.username}</h2>
            <h3>{toto.label}</h3>
            <p>{toto.textWanted}</p>
          </div>
        );
      })}
    </SswapWanted>
  );
}
