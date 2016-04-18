'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (props) {
  var status = props.status;
  var loadingComponent = props.loadingComponent;
  var errorComponent = props.errorComponent;
  var displayComponent = props.displayComponent;

  var other = _objectWithoutProperties(props, ['status', 'loadingComponent', 'errorComponent', 'displayComponent']);

  switch (status) {
    case 'LOADING':
      return loadingComponent || _react2.default.createElement(DefaultLoadingComponent, other);
    case 'ERROR':
      return errorComponent || _react2.default.createElement(DefaultLoadingComponent, other);
    case 'DISPLAY':
      return displayComponent;
    default:
      throw new Error('Not a valid status: ', status);
  }
};

function DefaultLoadingComponent(props) {
  // set default background color
  props.style = props.style || {};
  props.style.backgroundColor = props.style.backgroundColor || '#F8F8F8';

  return _react2.default.createElement(
    'svg',
    _extends({ version: '1.1', viewBox: '0 0 500 500' }, props),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('polygon', {
        fill: '#888888',
        points: '199.715,282.865 223.088,258.295 231.847,262.088 259.477,232.661 270.358,245.676 275.262,242.711 301.827,282.865' }),
      _react2.default.createElement('circle', { fill: '#888888', cx: '226.719', cy: '229.417', r: '10.21' })
    )
  );
}