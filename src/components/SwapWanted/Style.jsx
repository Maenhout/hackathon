import styled from 'styled-components';

const SswapRequest = styled.div`
  margin-top: 40px;
  font-family: 'Mukta', sans-serif;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 100px;
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    i {
      color: #00d071;
    }
  }

  .profile {
    display: flex;
    align-items: center;
    border: solid 1px #a9a9ad;
    border-radius: 5px;
    padding: 20px;
    margin: 15px;
    width: 400px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    background-color: grey;
    border-radius: 100%;
    width: 19%;
  }

  .description {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    width: 100%;
  }

  .title {
    display: flex;
    justify-content: space-between;
  }

  .star {
    color: #ffc44e;
    font-weight: 600;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  h3 {
    padding-bottom: 7px;
    color: #ff00ae;
  }
`;

export default SswapRequest;
