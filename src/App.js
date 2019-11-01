import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { App as Config } from './config';

import Routes from './routes';

import { GlobalStyle } from './styles';

const AppContainer = styled.div`
  background: linear-gradient(to right bottom, var(--darkest), var(--dark));
  min-height: 100vh;
`;

function App() {
  return (
    <Router basename={Config.publicURL}>
      <AppContainer className="App">
        <GlobalStyle />
        <Switch>
          {Routes.map(route => (
            <Route key={route.name} {...route} />
          ))}
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
