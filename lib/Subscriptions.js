import React from 'react';
import Loader from './Loader';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { Tracker } from 'meteor/tracker';

export default createContainer(
  (props) => {
    const subscriptions = props.getSubscriptions();
    const isReady = subscriptions.reduce((isReady, subscription) => {
      return isReady && subscription.ready();
    }, true);

    const status = isReady ? 'DISPLAY' : 'LOADING';

    return {...props, status}
  },
  ({status, displayComponent, loadingComponent, errorComponent, ...other}) => {
    return <Loader
      status={status}
      displayComponent={displayComponent}
      loadingComponent={loadingComponent}
      errorComponent={errorComponent}
      {...other} />;
  }
)

const permanentlySubscribe = (() => {
  const subscriptions = [];

  return function () {
    // try to find an existing subscription
    const args = _.toArray(arguments);

    const existingSubscription = _.find(subscriptions, (subscription) => {
      return _.isEqual(subscription.args, args);
    })

    if (existingSubscription) {
      return existingSubscription.handler;
    }

    // create a new subscription
    let handler;
    Tracker.nonreactive(function () {
      handler = Meteor.subscribe.apply(Meteor, args);
    })

    subscriptions.push({ args, handler })
    return handler;
  }
})();

export { permanentlySubscribe }
