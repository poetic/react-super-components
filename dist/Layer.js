'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOfType = _react.PropTypes.oneOfType;
var func = _react.PropTypes.func;
var instanceOf = _react.PropTypes.instanceOf;


function Layer(_ref) {
  var style = _ref.style;
  var component = _ref.component;

  var Component = component;
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(Component, null)
  );
}

Layer.PropTypes = {
  id: string.isRequired,
  component: oneOfType([func, instanceOf(_react2.default.Component)]).isRequired,
  style: object
};

exports.default = Layer;