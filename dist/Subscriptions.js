'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permanentlySubscribe = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoaderStack = require('./LoaderStack');

var _LoaderStack2 = _interopRequireDefault(_LoaderStack);

var _reactMeteorData = require('meteor/react-meteor-data');

var _meteor = require('meteor/meteor');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _tracker = require('meteor/tracker');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _reactMeteorData.createContainer)(function (props) {
  var subscriptions = props.getSubscriptions();
  var isReady = _lodash2.default.every(subscriptions, function (subscription) {
    return subscription.ready();
  });

  var status = isReady ? 'display' : 'loading';

  return _extends({}, props, { status: status });
}, function (_ref) {
  var status = _ref.status;
  var displayComponent = _ref.displayComponent;
  var loadingComponent = _ref.loadingComponent;
  var errorComponent = _ref.errorComponent;

  var other = _objectWithoutProperties(_ref, ['status', 'displayComponent', 'loadingComponent', 'errorComponent']);

  return _react2.default.createElement(_LoaderStack2.default, _extends({
    status: status,
    displayComponent: displayComponent,
    loadingComponent: loadingComponent,
    errorComponent: errorComponent
  }, other));
});


var permanentlySubscribe = function () {
  var subscriptions = [];

  return function () {
    // try to find an existing subscription
    var args = _lodash2.default.toArray(arguments);

    var existingSubscription = _lodash2.default.find(subscriptions, function (subscription) {
      return _lodash2.default.isEqual(subscription.args, args);
    });

    if (existingSubscription) {
      return existingSubscription.handler;
    }

    // create a new subscription
    var handler = void 0;
    _tracker.Tracker.nonreactive(function () {
      handler = _meteor.Meteor.subscribe.apply(_meteor.Meteor, args);
    });

    subscriptions.push({ args: args, handler: handler });
    return handler;
  };
}();

exports.permanentlySubscribe = permanentlySubscribe;