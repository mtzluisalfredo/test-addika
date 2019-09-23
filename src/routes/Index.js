import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../Pages/Home';
import HeaderCustom from '../Components/HeaderCustom';

const content = (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
);


const Root = () => (
  <Router>
    <Layout className='layout-routes'>
      <HeaderCustom content={content} />
    </Layout>
  </Router>
);

export default Root;
