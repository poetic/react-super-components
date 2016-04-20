import React from 'react';
import Cars from '/shared/cars';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Subscriptions, { permanentlySubscribe } from '../lib/Subscriptions';

export default class SubscriptionsDemo extends React.Component {
  render() {
    const CarsComponent = ({ cars }) => {
      return (
        <ul>
          {
            cars.map((car, index) => {
              return <li key={index}>{car.name}</li>;
            })
          }
        </ul>
      );
    };

    const CarsContainer = createContainer(() => {
      return {
        cars: Cars.find().fetch()
      };
    }, CarsComponent);

    return (
      <div>
        <h2>permanentlySubscribe</h2>
        <Subscriptions
          getSubscriptions={() => { return [permanentlySubscribe('cars')] }}
          unsubscribe={false}
          displayComponent={<CarsContainer/>} />
        <h2>Meteor.subscribe (this subscribe is unsubscribed automatically)</h2>
        <Subscriptions
          getSubscriptions={() => { return [Meteor.subscribe('cars')] }}
          unsubscribe={false}
          displayComponent={<CarsContainer/>} />
      </div>
    );
  }
}
