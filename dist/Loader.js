'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _props = undefined.props;
  var status = _props.status;
  var loadingComponent = _props.loadingComponent;
  var errorComponent = _props.errorComponent;
  var displayComponent = _props.displayComponent;
  var style = _props.style;


  switch (status) {
    case 'LOADING':
      return loadingComponent || _react2.default.createElement(LoadingComponent, other);
    case 'ERROR':
      return errorComponent || _react2.default.createElement(ErrorComponent, other);
    case 'DISPLAY':
      return displayComponent;
    default:
      throw new Error('Not a valid status: ', status);
  }
};

function LoadingComponent(props) {
  return _react2.default.createElement(
    'div',
    props,
    'Loading...'
  );
}

function ErrorComponent(props) {
  return _react2.default.createElement(
    'div',
    props,
    'Error...'
  );
}