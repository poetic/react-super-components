'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactVirtualized = require('react-virtualized');

require('react-virtualized/styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this));

    _this.rowRenderer = _this.rowRenderer.bind(_this);
    return _this;
  }

  _createClass(List, [{
    key: 'rowRenderer',
    value: function rowRenderer(index, list) {
      var rowRenderer = this.props.rowRenderer;


      if (rowRenderer) {
        return rowRenderer(index, list);
      }

      return list[index];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var className = _props.className;
      var thresholdRows = _props.thresholdRows;
      var list = _props.list;
      var rowHeight = _props.rowHeight;


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
            overscanRows: thresholdRows
          });
        }
      );
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  className: _react.PropTypes.string,
  list: _react.PropTypes.array.isRequired,
  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired,
  rowRenderer: _react.PropTypes.func,
  thresholdRows: _react.PropTypes.number
};

exports.default = List;