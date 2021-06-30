import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import SubmissionForm from './components/SubmissionForm/SubmissionForm';
import SwapWanted from './components/SwapWanted/SwapWanted';

const SApp = styled.div`
  .App {
    height: 90vh;
    background-image: url('/background.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
`;

function App() {
  return (
    <Router>
      <Switch>
        <SApp>
          <div className="App">
            <Header />
            <Route>
              <Description />
            </Route>
            <Route path="/swapwanted">
              <SwapWanted />
            </Route>
            <Route path="/form">
              <SubmissionForm />
            </Route>
          </div>
        </SApp>
      </Switch>
    </Router>
  );
}

export default App;
