'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimatedStack = function (_React$Component) {
  _inherits(AnimatedStack, _React$Component);

  function AnimatedStack(props) {
    _classCallCheck(this, AnimatedStack);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AnimatedStack).call(this, props));

    _this.state = {
      isInTransition: false,
      layersStyles: _this.getDefaultStyles(props.activeLayerIndex)
    };
    return _this;
  }

  _createClass(AnimatedStack, [{
    key: 'getDefaultStyles',
    value: function getDefaultStyles(currentIndex, nextIndex) {
      var children = this.props.children;

      var activeIndexes = [currentIndex, nextIndex].filter(_lodash2.default.isString);

      return children.reduce(function (acc, child) {
        var index = child.props.index;


        acc[index] = { position: 'absolute' };

        var active = _lodash2.default.includes(activeIndexes, index);

        // move inactive layers in the background
        if (!active) {
          acc[index]['zIndex'] = '-1000';
        }

        return acc;
      }, {});
    }
  }, {
    key: 'getAnimationObject',
    value: function getAnimationObject(currentIndex, nextIndex) {
      var isReverse = false;

      var animation = _lodash2.default.find(this.props.animations, function (_ref) {
        var from = _ref.from;
        var to = _ref.to;

        var fromExist = _lodash2.default.isString(from);
        var toExist = _lodash2.default.isString(to);

        var fromMatchForward = from === currentIndex;
        var toMatchForward = to === nextIndex;

        var isForward = fromExist && fromMatchForward && toExist && toMatchForward || fromExist && fromMatchForward && !toExist || !fromExist && toExist && toMatchForward;

        if (isForward) {
          return true;
        }

        var fromMatchBackward = from === nextIndex;
        var toMatchBackward = to === currentIndex;

        var isBackward = fromExist && fromMatchBackward && toExist && toMatchBackward || fromExist && fromMatchBackward && !toExist || !fromExist && toExist && toMatchBackward;

        if (isBackward) {
          isReverse = true;
          return true;
        }
      });

      if (!animation) {
        return null;
      }

      if (!isReverse) {
        return animation.use();
      }

      if (animation.reverse) {
        return animation.reverse();
      }

      var animationObject = animation.use();

      exchangeVaules(animationObject, 'currentLayer', 'nextLayer');
      _lodash2.default.each(animationObject, function (value, key) {
        value && exchangeVaules(value, 'startStyle', 'endStyle');
      });

      return animationObject;
    }

    // layer: 'currentlayer' | 'nextLayer'
    // type: 'startStyle' | 'endStyle'

  }, {
    key: 'getStyleForLayer',
    value: function getStyleForLayer(animationObject, layer, type, index) {
      var style = _lodash2.default.get(animationObject, [layer, type]);

      if (!style) {
        return {};
      }

      if (type === 'endStyle') {
        style.transition = animationObject[layer].transition;
      } else if (this.state.isInTransition) {
        style.transition = _lodash2.default.get(this.state.layersStyles, [index, 'transition']);
      }

      return style;
    }

    // type: 'startStyle' | 'endStyle'

  }, {
    key: 'layersStylesForAnimation',
    value: function layersStylesForAnimation(defaultStyles, currentIndex, nextIndex, animationObject, type) {
      var layersStyles = _lodash2.default.cloneDeep(defaultStyles);

      _lodash2.default.extend(layersStyles[currentIndex], this.getStyleForLayer(animationObject, 'currentLayer', type, currentIndex));

      _lodash2.default.extend(layersStyles[nextIndex], this.getStyleForLayer(animationObject, 'nextLayer', type, nextIndex));

      return layersStyles;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var currentIndex = this.props.activeLayerIndex;
      var nextIndex = nextProps.activeLayerIndex;

      if (currentIndex !== nextIndex) {
        var _ret = function () {
          var animationObject = _this2.getAnimationObject(currentIndex, nextIndex);

          if (!animationObject) {
            _this2.setState({
              isInTransition: false,
              layersStyles: _this2.getDefaultStyles(nextIndex)
            });
            return {
              v: void 0
            };
          }

          var defaultStyles = _this2.getDefaultStyles(currentIndex, nextIndex);

          var layersStylesStart = _this2.layersStylesForAnimation(defaultStyles, currentIndex, nextIndex, animationObject, 'startStyle');
          _this2.setState({ layersStyles: layersStylesStart });

          setTimeout(function () {
            var layersStylesEnd = _this2.layersStylesForAnimation(defaultStyles, currentIndex, nextIndex, animationObject, 'endStyle');
            _this2.setState({
              isInTransition: true,
              layersStyles: layersStylesEnd
            });
          });
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(e) {
      this.setState({
        isInTransition: false,
        layersStyles: this.getDefaultStyles(this.props.activeLayerIndex)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var children = _props.children;
      var animations = _props.animations;
      var activeLayerIndex = _props.activeLayerIndex;

      var other = _objectWithoutProperties(_props, ['children', 'animations', 'activeLayerIndex']);

      var layers = children.map(function (child) {
        var index = child.props.index;


        return _react2.default.createElement(
          'div',
          {
            key: index,
            style: _this3.state.layersStyles[index],
            onTransitionEnd: function onTransitionEnd(e) {
              return _this3.handleTransitionEnd(e);
            } },
          child
        );
      });

      return _react2.default.createElement(
        'div',
        other,
        layers
      );
    }
  }]);

  return AnimatedStack;
}(_react2.default.Component);

exports.default = AnimatedStack;


function exchangeVaules(obj, first, second) {
  var temp = obj[first];
  obj[first] = obj[second];
  obj[second] = temp;
  return obj;
}