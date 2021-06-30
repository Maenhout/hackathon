import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SDescription from './Style';
import SwapWanted from '../SwapWanted/SwapWanted';
import SubmissionForm from '../SubmissionForm/SubmissionForm';

export default function Header() {
  const [isSent, setIsSent] = useState(false);
  const [labels, setLabels] = useState([]);
  const [details, setDetails] = useState({
    requestCategory: null,
  });
  const [swaps, setSwaps] = useState([]);

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

  useEffect(() => {
    if (labels && details.requestCategory) {
      axios
        .get(`http://localhost:5050/proposedservice/${details.requestCategory}`)
        .then(({ data }) => {
          setSwaps(data);
        });
    }
  }, [details.requestCategory]);

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
    <>
      <SDescription>
        <h2>
          Welcome to the <br />
          Fiverr <i>Swap</i>
        </h2>
        <p className="description">
          Here you can propose your skills and get back <br />
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
              <select
                name="requestCategory"
                id="requestCategory"
                onChange={handleChange}
                required
              >
                <option value="text">Select the domain you want</option>
                {labels.map((label) => {
                  return (
                    <option value={parseInt(label.id, 10)}>
                      {label.label}
                    </option>
                  );
                })}
              </select>
            </label>
          </form>
        )}
      </SDescription>
      {swaps.length ? <SwapWanted list={swaps} /> : <SubmissionForm />}
    </>
  );
}
