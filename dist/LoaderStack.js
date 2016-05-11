'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Stack = require('./Stack');

var _Stack2 = _interopRequireDefault(_Stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (props) {
  var status = props.status;
  var loadingElement = props.loadingElement;
  var errorElement = props.errorElement;
  var displayElement = props.displayElement;

  var other = _objectWithoutProperties(props, ['status', 'loadingElement', 'errorElement', 'displayElement']);

  var _loadingElement = loadingElement ? _react2.default.cloneElement(loadingElement, { index: 'loading' }) : _react2.default.createElement(DefaultLoadingComponent, _extends({ index: 'loading' }, other));

  var _errorElement = errorElement ? _react2.default.cloneElement(errorElement, { index: 'error' }) : _react2.default.createElement(DefaultLoadingComponent, _extends({ index: 'error' }, other));

  var _displayElement = _react2.default.cloneElement(displayElement, { index: 'display' });

  return _react2.default.createElement(
    _Stack2.default,
    { activeLayerIndex: status },
    _loadingElement,
    _errorElement,
    _displayElement
  );
};

function DefaultLoadingComponent(props) {
  // set default background color
  var mergedProps = Object.assign({}, props);
  mergedProps.style = Object.assign({ backgroundColor: '#F8F8F8' }, mergedProps.style);

  return _react2.default.createElement(
    'div',
    props,
    _react2.default.createElement(
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
    )
  );
}