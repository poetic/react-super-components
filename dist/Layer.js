'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;


function Layer(_ref) {
  var style = _ref.style;
  var component = _ref.component;
  var componentProps = _ref.componentProps;

  var Component = component;
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(Component, componentProps)
  );
}

Layer.PropTypes = {
  id: string.isRequired,
  style: object,
  component: func.isRequired,
  componentProps: object
};

exports.default = Layer;