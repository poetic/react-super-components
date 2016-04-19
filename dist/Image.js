'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-inview');

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    _classCallCheck(this, Image);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, props));

    _this.state = { status: 'LOADING' };
    return _this;
  }

  _createClass(Image, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.$imageNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));

      this.$imageNode.on('inview', function (event, isInView) {
        _this2.$imageNode.off('inview');

        var image = new window.Image();
        image.onload = function (e) {
          // NOTE: the timeout is meant to exagerate the loading time
          window.setTimeout(function () {
            _this2.setState({ status: 'DISPLAY' });
          }, 1000);
        };
        image.onerror = function () {
          _this2.setState({ status: 'ERROR' });
        };
        image.src = _this2.props.src;
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.$imageNode.off('inview');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var loadingComponent = _props.loadingComponent;
      var errorComponent = _props.errorComponent;

      var other = _objectWithoutProperties(_props, ['loadingComponent', 'errorComponent']);

      var status = this.state.status;


      var displayComponent = _react2.default.createElement('img', other);

      return _react2.default.createElement(_Loader2.default, _extends({
        status: status,
        displayComponent: displayComponent,
        loadingComponent: loadingComponent,
        errorComponent: errorComponent
      }, other));
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;


Image.propTypes = {
  src: _react.PropTypes.string.isRequired,
  loadingComponent: _react.PropTypes.object,
  errorComponent: _react.PropTypes.object
};

exports.default = Image;