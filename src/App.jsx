import styled from 'styled-components';
import Header from './components/Header/Header';
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import SwapRequest from './components/SwapRequest/SwapRequest';

const SApp = styled.div`
  .background {
    height: 85vh;
    background-image: url('/background.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  .App {
    padding-top: 80px;
  }
`;

function App() {
  return (
    <SApp>
      <div className="background">
        <Header />
        <div className="App">
          <SwapRequest />
          <SubmissionForm />
        </div>
      </div>
    </SApp>
  );
}

export default App;
