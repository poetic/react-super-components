'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var array = _react.PropTypes.array;

var Stack = function (_React$Component) {
  _inherits(Stack, _React$Component);

  function Stack() {
    _classCallCheck(this, Stack);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stack).apply(this, arguments));
  }

  _createClass(Stack, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var children = _props.children;
      var animations = _props.animations;
      var activeLayerId = _props.activeLayerId;


      if (!animations) {
        return _lodash2.default.find(children, function (child) {
          return child.props.id === activeLayerId;
        });
      }

      console.log('===== NEED TO IMPLEMENT ANIMATIONS =====');
      return _react2.default.createElement(
        'div',
        null,
        children
      );
    }
  }]);

  return Stack;
}(_react2.default.Component);

exports.default = Stack;


Stack.PropTypes = {
  id: string.isRequired,
  children: array.isRequired,
  animations: array,
  activeLayerId: string
};