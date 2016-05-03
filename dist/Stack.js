'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _paramStore = require('param-store');

var _paramStore2 = _interopRequireDefault(_paramStore);

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

    _this.state = { activeLayerId: _paramStore2.default.get(props.id) };
    return _this;
  }

  _createClass(Stack, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.listener = _paramStore2.default.listen(this.props.id, function (_ref) {
        var changedParams = _ref.changedParams;

        _this2.setState({ activeLayerId: changedParams[_this2.props.id] });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _paramStore2.default.unlisten(this.listener);
    }
  }, {
    key: 'activeLayerId',
    value: function activeLayerId() {
      return _lodash2.default.find([this.props.activeLayerId, this.state.activeLayerId, this.props.defaultActiveLayerId], _lodash2.default.isString);
    }
  }, {
    key: 'activeLayer',
    value: function activeLayer() {
      var _this3 = this;

      return _lodash2.default.find(this.props.children, function (child) {
        return child.props.id === _lodash2.default.toString(_this3.activeLayerId());
      });
    }
  }, {
    key: 'animatedLayers',
    value: function animatedLayers() {
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.animations ? this.animatedLayers() : this.activeLayer()
      );
    }
  }]);

  return Stack;
}(_react2.default.Component);

exports.default = Stack;


Stack.PropTypes = {
  id: string,
  children: array.isRequired,
  animations: array,
  activeLayerId: string
};