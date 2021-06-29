import { useState } from 'react';
import axios from 'axios';
import SsubmissionForm from './Style';

export default function SubmissionForm() {
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    id: 1,
  });

  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

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
    <SsubmissionForm>
      {isSent ? (
        <div className="button">
          <button type="button" className="inactive">
            Submitted
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Robin </p>

          <fieldset className="field1">
            <label htmlFor="requestTitle">
              <input
                type="text"
                placeholder="title"
                name="requestTitle"
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="requestCategory">
              <select
                name="requestCategory"
                id="requestCategory"
                onChange={handleChange}
                required
              >
                <option>Request categories</option>
                <option>Graphic & Design</option>
                <option>Digital Marketing</option>
                <option>Writing & Translation</option>
                <option>Video & Animation</option>
                <option>Music & Audio</option>
                <option>Programming & Tech</option>
                <option>Data</option>
                <option>Business</option>
                <option>Lifestyle</option>
              </select>
            </label>

            <label htmlFor="request">
              <textarea
                name="request"
                placeholder="I wish"
                id="Request"
                cols="30"
                rows="10"
                onChange={handleChange}
                required
              />
            </label>
          </fieldset>
          <fieldset className="field2">
            <label htmlFor="offerTitle">
              <input
                type="text"
                placeholder="title"
                name="offerTitle"
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="offerCategory">
              <select
                name="offerCategory"
                id="offerCategory"
                onChange={handleChange}
                required
              >
                <option>Offer categories </option>
                <option>Graphic & Design</option>
                <option>Digital Marketing</option>
                <option>Writing & Translation</option>
                <option>Video & Animation</option>
                <option>Music & Audio</option>
                <option>Programming & Tech</option>
                <option>Data</option>
                <option>Business</option>
                <option>Lifestyle</option>
              </select>
            </label>

            <label htmlFor="offer">
              <textarea
                name="offer"
                placeholder="I propose"
                id="offer"
                cols="30"
                rows="10"
                onChange={handleChange}
                required
              />
            </label>
            <div className="button">
              <input type="submit" className="active" />
            </div>
          </fieldset>
        </form>
      )}
    </SsubmissionForm>
  );
}
