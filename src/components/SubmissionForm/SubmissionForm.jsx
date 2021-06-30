import { useState } from 'react';
import axios from 'axios';
import SsubmissionForm from './Style';

export default function SubmissionForm() {
  const [isSent, setIsSent] = useState(false);
  const [details, setDetails] = useState({
    offerCategory: '',
    requestCategory: '',
    title: '',
    email: '',
    offer: '',
    request: '',
  });
  const handleChange = (evt) => {
    const newDetails = { ...details };
    newDetails[evt.target.name] = evt.target.value;
    setDetails(newDetails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5050/postswap`, details).then(
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
          <div className="select">
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
          </div>
          <div className="title">
            <p>Title :</p>
            <label htmlFor="title">
              <input
                type="text"
                name="title"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="email">
            <p>Email :</p>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="offer">
            <p>Offer :</p>
            <label htmlFor="offer">
              <textarea
                name="offer"
                id="offer"
                cols="30"
                rows="10"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="request">
            <p>Request :</p>
            <label htmlFor="request">
              <textarea
                name="request"
                id="Request"
                cols="30"
                rows="10"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="button">
            <input type="submit" className="active" />
          </div>
        </form>
      )}
    </SsubmissionForm>
  );
}
