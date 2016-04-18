'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperSubscriptions = function (_React$Component) {
  _inherits(SuperSubscriptions, _React$Component);

  function SuperSubscriptions(props) {
    _classCallCheck(this, SuperSubscriptions);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SuperSubscriptions).call(this, props));

    _this.state = {
      renderState: 'loading',
      error: null
    };
    return _this;
  }

  _createClass(SuperSubscriptions, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var subscriptions = this.createSubscriptions();

      Tracker.autorun(function () {
        var subsReady = _this2.checkSubscriptions(subscriptions);
        _this2.setState({ renderState: subsReady ? 'render' : 'loading' });
      });
    }
  }, {
    key: 'createSubscriptions',
    value: function createSubscriptions() {
      var _this3 = this;

      var subsArgs = _.clone(this.props.subscriptionsArguments);
      var subscriptions = [];

      subsArgs.forEach(function (args) {
        args.push({
          onStop: function onStop(error) {
            _this3.setState({ renderState: 'error', error: error });
          }
        });
        subscriptions.push(Meteor.subscribe.apply(Meteor, args));
      });

      return subscriptions;
    }
  }, {
    key: 'checkSubscriptions',
    value: function checkSubscriptions(subscriptions) {
      return subscriptions.every(function (sub) {
        return sub.ready();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      switch (status) {
        case 'LOADING':
          return this.props.loadingComponent || _react2.default.createElement(
            'div',
            null,
            'LOADING'
          );
        case 'ERROR':
          return this.props.errorComponent ? _react2.default.cloneElement(this.props.errorComponent, { error: this.state.error }) : _react2.default.createElement(
            'div',
            null,
            'Error'
          );
        case 'SHOW':
          return this.props.viewComponent;
        default:
          throw new Error('not a valid status: ', status);
      }
    }
  }]);

  return SuperSubscriptions;
}(_react2.default.Component);

SuperSubscriptions.propTypes = {
  subscriptionsArguments: _react2.default.PropTypes.array,
  loadingComponent: _react2.default.PropTypes.element,
  errorComponent: _react2.default.PropTypes.element,
  viewComponent: _react2.default.PropTypes.element
};

exports.default = SuperSubscriptions;