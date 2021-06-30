import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SDescription from './Style';

export default function Header() {
  const [isSent, setIsSent] = useState(false);
  const [labels, setLabels] = useState([]);
  const [details, setDetails] = useState({
    id: 1,
    requestCategory: '1',
  });

  const handleChange = (evt) => {
    const newDetails = { ...details };

    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/category`).then(({ data }) => {
      setLabels(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5050/wanted`, details).then(
      (response) => {
        console.log(response);
        setIsSent(true);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <SDescription>
      <h2>
        Welcome to the <br />
        Fiverr <i>Swap</i>
      </h2>
      <p className="description">
        Here you can propose your skills and get get back <br />
        the services you need!
      </p>
      {isSent ? (
        <div className="button">
          <button type="button" className="inactive">
            Submitted
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="requestCategory">
            <p className="p-want">Select the domain you want</p>
            <select
              name="requestCategory"
              id="requestCategory"
              onChange={handleChange}
              required
            >
              {labels.map((label) => {
                return (
                  <option value={parseInt(label.id, 10)}>{label.label}</option>
                );
              })}
            </select>
          </label>
          <div className="button">
            <input type="submit" value="Send" className="active" />
          </div>
        </form>
      )}
    </SDescription>
  );
}
