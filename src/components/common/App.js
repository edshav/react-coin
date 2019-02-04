import React, { Component } from 'react';
import Table from '../table/Table';
import Header from './Header';
import NotFound from '../notfound/NotFound';
import Detail from '../detail/Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={Table} exact />
            <Route path="/currency/:id" component={Detail} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
