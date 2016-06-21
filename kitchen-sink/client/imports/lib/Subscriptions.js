import React from 'react';
import LoaderStack from './LoaderStack';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { Tracker } from 'meteor/tracker';

export default createContainer(
  (props) => {
    const subscriptions = props.getSubscriptions();
    const isReady = _.every(subscriptions, (subscription) => {
      return subscription.ready()
    });

    const status = isReady ? 'display' : 'loading';

    return {...props, status}
  },
  ({status, displayComponent, loadingComponent, errorComponent, ...other}) => {
    return <LoaderStack
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
