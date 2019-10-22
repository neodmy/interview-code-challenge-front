import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './containers/Landing/Landing';
import Layout from './hoc/Layout/Layout';
import Products from './containers/Products/Products';
import Product from './containers/Products/Product/Product';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/products" component={Products} />
          <Route path="/phone" component={Product} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
