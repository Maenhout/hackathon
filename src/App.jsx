import styled from 'styled-components';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import SwapRequest from './components/SwapRequest/SwapRequest';

const SApp = styled.div`
  .App {
    height: 85vh;
    background-image: url('/background.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
`;

function App() {
  return (
    <SApp>
      <div className="App">
        <Description />
        <SwapRequest />
        <SubmissionForm />
      </div>
      <Header />
    </SApp>
  );
}

export default App;
