import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootPage from './components/pages/RootPage';
import './App.css';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core';
import ServicePortPage from './components/pages/ServicePortPage';
import ServiceDatabasePage from './components/pages/ServiceDatabasePage';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    }
  },
  palette: {
    primary: {
      main: '#ff3a3a',
    },
    // secondary: {
    //   main: teal[700],
    // },
    // danger: {
    //   main: orange[700],
    // },
    // error: {
    //   main: orange[700],
    // },
    // warning: {
    //   main: pink[500],
    // },
    // border: {
    //   main: grey[300],
    // },
  },
  typography: {
    fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
    fontSize: 15,
  },
  spacing: {
    unit: 12,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path={'/service/new'} component={ServicePortPage}/>
          <Route exact path={'/service/new/db'} component={ServiceDatabasePage}/>
          <Route component={RootPage}/>
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
