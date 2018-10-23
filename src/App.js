import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootPage from './components/pages/RootPage';

class App extends Component {
  render() {
    return (
      <Switch>
        {/*<Route exact path={'/'} component={RootPage} />*/}
        <Route component={RootPage}/>
      </Switch>
    );
  }
}

export default App;
