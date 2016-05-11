'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentData = this.props.data;
      var newData = nextProps.data;

      if (currentData.length === newData.length) {
        if (!_lodash2.default.isEqual(currentData, newData)) {
          this._virtualScroll.recomputeRowHeights();
        }
      }
    }
  }, {
    key: 'groupDataAndAddHeaders',
    value: function groupDataAndAddHeaders(data, groupBy) {
      var groupedDataObject = _lodash2.default.groupBy(data, groupBy);
      var groupedDataObjectKeys = Object.keys(groupedDataObject);

      var groupedData2DArrayWithHeaders = groupedDataObjectKeys.map(function (key) {
        var array = groupedDataObject[key];
        var header = { type: 'header', title: key };

        return _lodash2.default.concat([header], array);
      });

      return _lodash2.default.flatten(groupedData2DArrayWithHeaders);
    }
  }, {
    key: 'sortData',
    value: function sortData(data, sortBy) {
      return _lodash2.default.sortBy(data, sortBy);
    }
  }, {
    key: 'checkTypesAndReturnMatchingItemType',
    value: function checkTypesAndReturnMatchingItemType(index, data) {
      var itemTypes = this.props.itemTypes;

      var dataItem = data[index];

      if (_lodash2.default.isArray(itemTypes)) {
        var typesToMatch = itemTypes.map(function (item) {
          return item.type;
        });

        if (typesToMatch.includes(dataItem.type)) {
          var itemType = _lodash2.default.find(itemTypes, { type: dataItem.type });

          return itemType;
        }

        throw new Error('Invalid prop `data` supplied to `List`. An object of `data` has a type property' + ' that does not match a passed in type from `itemTypes`.');
      }

      return itemTypes;
    }
  }, {
    key: 'checkForModificationsAndReturnModifiedData',
    value: function checkForModificationsAndReturnModifiedData(data) {
      var _props = this.props;
      var groupBy = _props.groupBy;
      var sortBy = _props.sortBy;

      var modifiableData = data;

      if (sortBy) {
        modifiableData = this.sortData(modifiableData, sortBy);
      }

      if (groupBy) {
        modifiableData = this.groupDataAndAddHeaders(modifiableData, groupBy);
      }

      return modifiableData;
    }
  }, {
    key: 'rowRenderer',
    value: function rowRenderer(index, data) {
      var itemType = this.checkTypesAndReturnMatchingItemType(index, data);
      var ListItemComponent = itemType.component;
      var props = _extends({ index: index, data: data }, itemType.componentProps);

      return _react2.default.createElement(ListItemComponent, props);
    }
  }, {
    key: 'rowHeight',
    value: function rowHeight(index, data) {
      var itemType = this.checkTypesAndReturnMatchingItemType(index, data);

      return itemType.height;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var className = _props2.className;
      var thresholdRows = _props2.thresholdRows;

      var data = this.checkForModificationsAndReturnModifiedData(this.props.data);

      return _react2.default.createElement(
        _reactVirtualized.AutoSizer,
        null,
        function (_ref) {
          var height = _ref.height;
          var width = _ref.width;
          return _react2.default.createElement(_reactVirtualized.VirtualScroll, {
            className: className,
            height: height,
            overscanRowsCount: thresholdRows,
            ref: function ref(_ref2) {
              _this2._virtualScroll = _ref2;
            },
            rowsCount: data.length,
            rowHeight: function rowHeight(index) {
              return _this2.rowHeight(index, data);
            },
            rowRenderer: function rowRenderer(index) {
              return _this2.rowRenderer(index, data);
            },
            width: width
          });
        }
      );
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  className: _react.PropTypes.string,
  data: function data(props, propName, componentName) {
    var data = props.data;

    if (!data) {
      return new Error('Required prop `' + propName + '` was not specified in `' + componentName + '`.');
    }

    if (!_lodash2.default.isArray(data)) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` to be an array.'));
    }

    if (_lodash2.default.isArray(props.itemTypes)) {
      data.forEach(function (dataItem) {
        if (!_lodash2.default.isObject(dataItem)) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` to be an array of objects.'));
        } else if (!dataItem.type) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. An object of ' + ('`' + propName + '` is missing the required property `type`.'));
        } else if (!_lodash2.default.isString(dataItem.type)) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. An object of ' + ('`' + propName + '` has a TypeError for the required property `type`.'));
        }
      });
    }

    return null;
  },
  groupBy: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.string]),
  itemTypes: function itemTypes(props, propName, componentName) {
    var itemTypes = props.itemTypes;

    if (!itemTypes) {
      return new Error('Required prop `' + propName + '` was not specified in `' + componentName + '`.');
    }

    if (_lodash2.default.isArray(itemTypes)) {
      itemTypes.forEach(function (item) {
        if (!item.type || !item.component || !item.height) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have required type, component,') + ' and height properties.');
        } else if (!_lodash2.default.isString(item.type)) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a type property of type String.'));
        } else if (!_lodash2.default.isNumber(item.height)) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a height property of type Number.'));
        } else if (!_lodash2.default.isFunction(item.component)) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a component property of type Function.'));
        } else if (item.componentProps && !_lodash2.default.isObject(item.componentProps)) {
          throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a componentProps property of type Object.'));
        }
      });
    } else if (_lodash2.default.isObject(itemTypes)) {
      if (!itemTypes.component || !itemTypes.height) {
        throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have required component and height properties.'));
      } else if (!_lodash2.default.isNumber(itemTypes.height)) {
        throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a height property of type Number.'));
      } else if (!_lodash2.default.isFunction(itemTypes.component)) {
        throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a component property of type Function.'));
      } else if (itemTypes.componentProps && !_lodash2.default.isObject(itemTypes.componentProps)) {
        throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` object to have a componentProps property of type Object.'));
      }
    } else {
      throw new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. ' + ('Expected `' + propName + '` to be an object or an array of objects.'));
    }

    return null;
  },
  sortBy: _react2.default.PropTypes.node,
  thresholdRows: _react2.default.PropTypes.number
};

exports.default = List;