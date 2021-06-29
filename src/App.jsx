import styled from 'styled-components';
import Header from './components/Header/Header';
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import SwapWanted from './components/SwapWanted/SwapWanted';

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
        <SubmissionForm />
        <SwapWanted />
      </div>
    </SApp>
  );
}

export default App;
