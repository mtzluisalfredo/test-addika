import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './../Components/Layout'
import Home from './../Pages/Home'

const Root = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Layout>
    </Router>
  )
};

export default Root
