'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _paramStore = require('param-store');

var _paramStore2 = _interopRequireDefault(_paramStore);

var _SimpleStack = require('./SimpleStack');

var _SimpleStack2 = _interopRequireDefault(_SimpleStack);

var _AnimatedStack = require('./AnimatedStack');

var _AnimatedStack2 = _interopRequireDefault(_AnimatedStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var array = _react.PropTypes.array;

var Stack = function (_React$Component) {
  _inherits(Stack, _React$Component);

  function Stack(props) {
    _classCallCheck(this, Stack);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Stack).call(this, props));

    _this.state = {};

    // only set index as state and change it when we have a index prop
    if (props.index) {
      _this.state.activeLayerIndex = _paramStore2.default.get(props.index);
    }
    return _this;
  }

  _createClass(Stack, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.index) {
        this.listener = _paramStore2.default.listen(this.props.index, function (_ref) {
          var changedParams = _ref.changedParams;

          _this2.setState({ activeLayerIndex: changedParams[_this2.props.index] });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _paramStore2.default.unlisten(this.listener);
    }
  }, {
    key: 'isAnimated',
    value: function isAnimated() {
      return _lodash2.default.get(this.props, 'animations.length');
    }
  }, {
    key: 'getFirstLayerIndex',
    value: function getFirstLayerIndex() {
      return _lodash2.default.first(this.props.children).props.index;
    }
  }, {
    key: 'getActiveLayerIndex',
    value: function getActiveLayerIndex() {
      return _lodash2.default.find([this.props.activeLayerIndex, this.state.activeLayerIndex, this.props.defaultActiveLayerIndex, this.getFirstLayerIndex()], _lodash2.default.isString);
    }
  }, {
    key: 'render',
    value: function render() {
      var other = _lodash2.default.omit(this.props, ['index', 'children', 'animations', 'activeLayerIndex']);

      var _props = this.props;
      var children = _props.children;
      var animations = _props.animations;

      var activeLayerIndex = this.getActiveLayerIndex();

      if (this.isAnimated()) {
        return _react2.default.createElement(_AnimatedStack2.default, _extends({
          children: children,
          animations: animations,
          activeLayerIndex: activeLayerIndex
        }, other));
      } else {
        return _react2.default.createElement(_SimpleStack2.default, _extends({
          children: children,
          activeLayerIndex: activeLayerIndex
        }, other));
      }
    }
  }]);

  return Stack;
}(_react2.default.Component);

exports.default = Stack;


Stack.PropTypes = {
  index: string,
  children: function children(props, propName, componentName) {
    var errorContext = 'Invalid prop `' + propName + '` supplied to `' + componentName + '`. ';

    if (!props.children) {
      return new Error(errorContext + 'Children can not be null.');
    }

    if (!props.children.length) {
      return new Error(errorContext + 'You must provide at least one child.');
    }

    props.children.forEach(function (child) {
      if (!_lodash2.default.isString(child.props.index)) {
        return new Error(errorContext + 'Each child must have an index prop.');
      }
    });
  },
  animations: array,
  activeLayerIndex: string
};