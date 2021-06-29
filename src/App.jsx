import styled from 'styled-components';
import Header from './components/Header/Header';
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import SwapRequest from './components/SwapRequest/SwapRequest';

const SApp = styled.div`
  .App {
    padding-top: 80px;
  }
`;

function App() {
  return (
    <SApp>
      <Header />
      <div className="App">
        <SwapRequest />
        <SubmissionForm />
      </div>
    </SApp>
  );
}

export default App;
