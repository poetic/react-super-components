import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index from './Index';
import ImageDemo from './ImageDemo';
import SubscriptionsDemo from './SubscriptionsDemo';
import ListDemo from './ListDemo';

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="image" component={ImageDemo}/>
      <Route path="subscriptions" component={SubscriptionsDemo}/>
      <Route path="list" component={ListDemo}/>
    </Route>
  </Router>
);
