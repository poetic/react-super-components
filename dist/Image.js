'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-inview');

var _Stack = require('./Stack');

var _Stack2 = _interopRequireDefault(_Stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultLoadingImg = function DefaultLoadingImg(style) {
  return _react2.default.createElement(
    'svg',
    _extends({ version: '1.1', viewBox: '0 0 500 500' }, style),
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('polygon', {
        fill: '#888888',
        points: '199.715,282.865 223.088,258.295 231.847,262.088 259.477,232.661 270.358,245.676 275.262,242.711 301.827,282.865' }),
      _react2.default.createElement('circle', { fill: '#888888', cx: '226.719', cy: '229.417', r: '10.21' })
    )
  );
};

var ReloadImg = function ReloadImg(style) {
  return _react2.default.createElement(
    'svg',
    _extends({ width: '60px', height: '60px', viewBox: '0 0 60 60', version: '1.1' }, style),
    _react2.default.createElement(
      'g',
      { id: 'Other-pages', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { id: 'reload', fill: '#888888' },
        _react2.default.createElement('path', { d: 'M27.8856005,7.77506185 C39.1095302,7.77506185 48.2330754,16.7585479 48.5057215,27.9475303 L54.710944,27.9475303 L45.4258308,38.2936799 L36.1407175,27.9475303 L43.3506913,27.9475303 C43.0780452,19.6150946 36.2618935,12.9481367 27.8856005,12.9481367 C19.3376414,12.9481367 12.4104117,19.8926742 12.4104117,28.4673612 C12.4104117,37.0370013 19.3376414,43.9865857 27.8856005,43.9865857 C31.3138723,43.9865857 34.4795961,42.8661734 37.0444887,40.973585 L40.5939366,44.7688556 C37.0899297,47.5194173 32.6771027,49.1596605 27.8856005,49.1596605 C16.4900047,49.1596605 7.25033246,39.893548 7.25033246,28.4673612 C7.25033246,17.0361275 16.4900047,7.77506185 27.8856005,7.77506185', id: 'Fill-65', transform: 'translate(30.980638, 28.467361) rotate(-47.000000) translate(-30.980638, -28.467361) ' })
      )
    )
  );
};

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var src = this.props.src;

      var image = new window.Image();

      image.src = src;
      if (image.complete) {
        this.setState({ status: 'display' });
      } else {
        this.state = { status: 'loading' };
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var lazy = this.props.lazy;

      var imageNode = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));

      if (lazy) {
        imageNode.on('inview', function () {
          return _this2.addListeners(imageNode);
        });
      } else {
        this.addListeners();
      }
    }
  }, {
    key: 'addListeners',
    value: function addListeners(imageNode) {
      var _this3 = this;

      var image = new window.Image();

      image.onload = function () {
        _this3.setState({ status: 'display' });
        if (imageNode) imageNode.off('inview');

        var imageDidLoad = _this3.props.imageDidLoad;

        if (imageDidLoad) imageDidLoad();
      };

      image.onerror = function () {
        _this3.setState({ status: 'error' });
      };

      // used to reinitialize img source
      image.src = this.props.src;
    }
  }, {
    key: 'reload',
    value: function reload() {
      this.setState({ status: 'loading' });

      this.addListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props;
      var src = _props.src;
      var loadingSrc = _props.loadingSrc;
      var style = _props.style;
      var lazy = _props.lazy;
      var imageDidLoad = _props.imageDidLoad;
      var wrapperProps = _props.wrapperProps;

      var other = _objectWithoutProperties(_props, ['src', 'loadingSrc', 'style', 'lazy', 'imageDidLoad', 'wrapperProps']);

      var status = this.state.status;


      var loadingElement = function loadingElement() {
        if (loadingSrc) {
          return _react2.default.createElement('img', { index: 'loading', src: loadingSrc, style: style });
        }
        return _react2.default.createElement(DefaultLoadingImg, { index: 'loading', style: style });
      };

      var displayElement = _react2.default.createElement('img', _extends({ index: 'display', src: src, style: style }, other));
      var errorElement = _react2.default.createElement(ReloadImg, { index: 'error', style: style, onClick: function onClick() {
          return _this4.reload(src);
        } });

      return _react2.default.createElement(
        _Stack2.default,
        _extends({ activeLayerIndex: status }, wrapperProps),
        loadingElement(),
        errorElement,
        displayElement
      );
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;


Image.propTypes = {
  src: _react.PropTypes.string.isRequired,
  loadingSrc: _react.PropTypes.string,
  wrapperStyles: _react.PropTypes.object,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  imageDidLoad: _react.PropTypes.func,
  lazy: _react.PropTypes.bool
};

exports.default = Image;