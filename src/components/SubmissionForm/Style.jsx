import styled from 'styled-components';

const SsubmissionForm = styled.div`
  background-color: #b64761;
  padding-bottom: 20px;
  margin: 0 auto;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
  }
  select {
    width: 700px;
    height: 2.5em;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 2px;
  }

  input {
    width: 700px;
    padding: 0px;
    border: 0px;
    height: 2.5em;
    border-radius: 2px;
  }

  textarea {
    width: 700px;
    padding: 0px;
    border: 0px;
    border-radius: 2px;
  }

  .active {
    margin: 0 auto;
  }
`;

export default SsubmissionForm;
