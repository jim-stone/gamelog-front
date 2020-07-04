import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './layout/Navbar';
import Welcome from './components/Welcome';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import theme from './theme';
import RegisterGame from './containers/RegisterGame';
import Login from './components/Login';
import Register from './components/Register';
import PlayerGames from './containers/PlayerGames'
import PrivateRoute from './components/PrivateRoute';
import { loadUser } from './actions/auth';

export default class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div className="App" >
        <Provider store={store}>
          <Router>
            <ThemeProvider theme={theme}>
              <Container maxWidth="sm" style={{ marginTop: 100 }}>
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <PrivateRoute exact path="/add_game" component={RegisterGame} />
                  <PrivateRoute exact path="/my_games" component={PlayerGames} />
                  {/* <Route path="/quotes/:id" component={Quote} /> */}
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </Container>
            </ThemeProvider>
          </Router>
        </Provider>
      </div >
    );
  };
};




