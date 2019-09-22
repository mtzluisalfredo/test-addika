import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
