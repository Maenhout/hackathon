import styled from 'styled-components';

const SDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  margin-left: 165px;
  font-family: 'Mukta', sans-serif;

  h2 {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.2em;
  }

  .description {
    margin-top: 30px;
    line-height: 1.5em;
  }

  i {
    font-family: 'Merriweather', sans-serif;
    font-style: italic;
  }

  .p-want {
    font-style: italic;
    margin-top: 50px;
  }

  .p-offer {
    font-style: italic;
    margin-top: 30px;
  }

  select {
    width: 340px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: white;
  }

  input {
    font-family: 'Mukta', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #ff00ae;
    padding: 3px 20px 3px 20px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid #ff00ae;
    margin-top: 35px;
    margin-left: 240px;
  }
`;

export default SDescription;
