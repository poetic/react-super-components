import Cars from '/shared/cars';
import { Meteor } from 'meteor/meteor';

if (!Cars.findOne()) {
  Cars.insert({ name: 'car1' });
  Cars.insert({ name: 'car2' });
  Cars.insert({ name: 'car3' });
  Cars.insert({ name: 'car4' });
  Cars.insert({ name: 'car5' });
  Cars.insert({ name: 'car6' });
  Cars.insert({ name: 'car7' });
  Cars.insert({ name: 'car8' });
  Cars.insert({ name: 'car9' });
  Cars.insert({ name: 'car10' });
}

Meteor.publish('cars', function () {
  return Cars.find();
});
