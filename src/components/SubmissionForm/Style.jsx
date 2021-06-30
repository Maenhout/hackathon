import styled from 'styled-components';

const SsubmissionForm = styled.div`
  background-color: #b64761;
  padding-bottom: 20px;
  margin: 0 auto;
  font-family: 'mukta', sans-serif;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    border-radius: 2px;
  }

  .reqTitle {
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 2em;
    text-align: center;
    padding: 40px;
    background-color: #f5f5f5;

    vertical-align: middle;
  }

  h2 {
    color: white;
    font-style: italic;
    margin-bottom: 2px;
    margin-top: 20px;
  }

  .label {
    display: flex;
  }
  .request {
    display: block;
  }

  select {
    width: 300px;
    height: 2.5em;
    border-radius: 4px;
  }

  .category {
    background-color: white;
    height: 2.5em;
    border: none;
    border-radius: 4px;
  }

  .input {
    width: 300px;
    padding: 0px;
    border: 0px;
    height: 2.5em;
    border-radius: 4px;
  }

  textarea {
    width: 700px;
    padding: 0px;
    border: 0px;
    border-radius: 4px;
  }

  .button {
    margin-left: 630px;
    margin-top: 20px;
  }
  .active {
    background-color: transparent;
    border: solid 1px white;
    border-radius: 2px;
    color: white;
    padding: 3px 20px 3px 20px;
  }
`;

export default SsubmissionForm;
