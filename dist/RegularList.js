'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _List2 = require('./List');

var _List3 = _interopRequireDefault(_List2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegularList = function (_List) {
  _inherits(RegularList, _List);

  function RegularList() {
    _classCallCheck(this, RegularList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RegularList).apply(this, arguments));
  }

  _createClass(RegularList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.checkForModificationsAndReturnModifiedData(this.props.data);
      var style = {
        width: '100%',
        height: '100%',
        overflow: 'scroll'
      };
      return _react2.default.createElement(
        'div',
        { style: style },
        data.map(function (dataItem, index) {
          return _this2.rowRenderer({ index: index, data: data, hasKey: true });
        })
      );
    }
  }]);

  return RegularList;
}(_List3.default);

exports.default = RegularList;