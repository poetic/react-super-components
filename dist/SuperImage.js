'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-inview');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuperImage = function (_React$Component) {
  (0, _inherits3.default)(SuperImage, _React$Component);

  function SuperImage(props) {
    (0, _classCallCheck3.default)(this, SuperImage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SuperImage).call(this, props));

    _this.state = { status: 'NOT_IN_VIEW' };
    return _this;
  }

  (0, _createClass3.default)(SuperImage, [{
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
  (0, _inherits3.default)(ImageLoading, _React$Component2);

  function ImageLoading() {
    (0, _classCallCheck3.default)(this, ImageLoading);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ImageLoading).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageLoading, [{
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
  (0, _inherits3.default)(ImageError, _React$Component3);

  function ImageError() {
    (0, _classCallCheck3.default)(this, ImageError);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ImageError).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageError, [{
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