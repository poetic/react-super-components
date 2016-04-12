'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-inview');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperImage = function (_React$Component) {
  _inherits(SuperImage, _React$Component);

  function SuperImage(props) {
    _classCallCheck(this, SuperImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SuperImage).call(this, props));

    _this.state = { status: 'NOT_IN_VIEW' };
    return _this;
  }

  _createClass(SuperImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isInView();
    }
  }, {
    key: 'isInView',
    value: function isInView() {
      var _this2 = this;

      var node = _reactDom2.default.findDOMNode(this);

      (0, _jquery2.default)(node).on('inview', function (event, isInView) {
        (0, _jquery2.default)(node).off('inview');
        _this2.setState({ isInView: isInView });

        var image = new window.Image();
        image.src = _this2.props.src;
        image.onload = function () {
          _this2.setState({ status: 'SHOW' });
        };
        image.onerror = function () {
          _this2.setState({ status: 'ERROR' });
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var src = _props.src;
      var style = _props.style;
      var status = this.state.status;


      switch (status) {
        case 'NOT_IN_VIEW':
          return _react2.default.createElement(ImageLoading, null);
        case 'ERROR':
          return _react2.default.createElement(ImageError, null);
        case 'SHOW':
          return _react2.default.createElement('img', { style: style, src: src });
        default:
          throw new Error('not a valid status: ', status);
      }
    }
  }]);

  return SuperImage;
}(_react2.default.Component);

exports.default = SuperImage;


SuperImage.propTypes = {
  src: _react.PropTypes.string,
  style: _react.PropTypes.object
};

var ImageLoading = function (_React$Component2) {
  _inherits(ImageLoading, _React$Component2);

  function ImageLoading() {
    _classCallCheck(this, ImageLoading);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageLoading).apply(this, arguments));
  }

  _createClass(ImageLoading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Loading...'
      );
    }
  }]);

  return ImageLoading;
}(_react2.default.Component);

var ImageError = function (_React$Component3) {
  _inherits(ImageError, _React$Component3);

  function ImageError() {
    _classCallCheck(this, ImageError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageError).apply(this, arguments));
  }

  _createClass(ImageError, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Error...'
      );
    }
  }]);

  return ImageError;
}(_react2.default.Component);

exports.default = SuperImage;