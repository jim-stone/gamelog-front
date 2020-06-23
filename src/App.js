import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Welcome from './components/Welcome';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import theme from './theme';
import RegisterGame from './containers/RegisterGame';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm" style={{ marginTop: 100 }}>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/add_game">
                <RegisterGame />
              </Route>
              {/* <Route path="/quotes/:id" component={Quote} /> */}
            </Switch>
          </Container>
        </ThemeProvider>

      </Router>

    </div>
  );
}

export default App;
