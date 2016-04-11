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

var _reactVirtualized = require('react-virtualized');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuperList = function (_React$Component) {
  (0, _inherits3.default)(SuperList, _React$Component);

  function SuperList() {
    (0, _classCallCheck3.default)(this, SuperList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SuperList).call(this));

    _this.rowRenderer = _this.rowRenderer.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SuperList, [{
    key: 'rowRenderer',
    value: function rowRenderer(index, list) {
      var item = list[index];
      return item;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var thresholdRows = _props.thresholdRows;
      var scrollToIndex = _props.scrollToIndex;
      var list = _props.list;
      var rowHeight = _props.rowHeight;
      var noRowsRenderer = _props.noRowsRenderer;

      return _react2.default.createElement(
        _reactVirtualized.AutoSizer,
        null,
        function (_ref) {
          var height = _ref.height;
          var width = _ref.width;
          return _react2.default.createElement(_reactVirtualized.VirtualScroll, {
            className: className,
            width: width,
            height: height,
            rowsCount: list.length,
            rowHeight: rowHeight,
            rowRenderer: function rowRenderer(index) {
              return _this2.rowRenderer(index, list);
            },
            noRowsRenderer: noRowsRenderer,
            overscanRows: thresholdRows,
            scrollToIndex: scrollToIndex
          });
        }
      );
    }
  }]);
  return SuperList;
}(_react2.default.Component);

SuperList.PropTypes = {
  className: _react.PropTypes.string,
  noRowsRenderer: _react.PropTypes.func,
  thresholdRows: _react.PropTypes.number,
  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
  list: _react.PropTypes.array.isRequired,
  rowRenderer: _react.PropTypes.func,
  listItem: _react.PropTypes.object,
  scrollToIndex: _react.PropTypes.func
};

exports.default = SuperList;