import { useEffect, useState } from 'react';
import axios from 'axios';
import SsubmissionForm from './Style';

export default function SubmissionForm() {
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

          <fieldset>
            <label htmlFor="requestTitle">
              Title:
              <input
                type="text"
                name="requestTitle"
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="requestCategory">
              Categories :
              <select
                name="requestCategory"
                id="requestCategory"
                onChange={handleChange}
                required
              >
                {labels.map((label) => {
                  return <option value={label.id}>{label.label} </option>;
                })}
              </select>
            </label>
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
          </fieldset>
          <fieldset>
            <label htmlFor="offerTitle">
              Title:
              <input
                type="text"
                name="offerTitle"
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="offerCategory">
              Categories :
              <select
                name="offerCategory"
                id="offerCategory"
                onChange={handleChange}
                required
              >
                {labels.map((label) => {
                  return <option value={label.id}>{label.label} </option>;
                })}
              </select>
            </label>
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
          </fieldset>
          <div className="button">
            <input type="submit" className="active" />
          </div>
        </form>
      )}
    </SsubmissionForm>
  );
}
