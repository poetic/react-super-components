import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import 'react-virtualized/styles.css';
import _ from 'lodash';

class List extends React.Component {
  checkTypesAndReturnMatchingItemType(index, data) {
    const { itemTypes } = this.props;
    const dataItem = data[index];

    if (_.isArray(itemTypes)) {
      const typesToMatch = itemTypes.map(item => item.type);

      if (typesToMatch.includes(dataItem.type)) {
        const itemType = _.find(itemTypes, { type: dataItem.type });

        return itemType;
      }
    } else {
      const itemType = itemTypes;

      if (itemType.type === dataItem.type) {
        return itemType;
      }
    }

    throw new Error(
      'Invalid prop `data` supplied to `List`. An object of `data` has a type property' +
      ' that does not match a passed in type from `itemTypes`.'
    );
  }

  rowRenderer(index, data) {
    const itemType = this.checkTypesAndReturnMatchingItemType(index, data);
    const ListItemComponent = itemType.component;

    return <ListItemComponent data={data} index={index} />;
  }

  rowHeight(index, data) {
    const itemType = this.checkTypesAndReturnMatchingItemType(index, data);

    return itemType.height;
  }

  render() {
    const { className, data, thresholdRows } = this.props;

    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualScroll
            className={ className }
            height={ height }
            overscanRows={ thresholdRows }
            rowsCount={ data.length }
            rowHeight={ index => (this.rowHeight(index, data)) }
            rowRenderer={ index => (this.rowRenderer(index, data)) }
            width={ width }
          />
        )}
      </AutoSizer>
    );
  }
}

List.propTypes = {
  className: PropTypes.string,
  data: (props, propName, componentName) => {
    const data = props.data;

    if (!data) {
      return new Error(
        `Required prop \`${propName}\` was not specified in \`${componentName}\`.`
      );
    }

    if (!_.isArray(data)) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
        `Expected \`${propName}\` to be an array of objects.`
      );
    }

    data.forEach((dataItem) => {
      if (!_.isObject(dataItem)) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` to be an array of objects.`
        );
      } else if (!dataItem.type) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. An object of ` +
          `\`${propName}\` is missing the required property \`type\`.`
        );
      } else if (!_.isString(dataItem.type)) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. An object of ` +
          `\`${propName}\` has a TypeError for the required property \`type\`.`
        );
      }
    });

    return null;
  },
  itemTypes: (props, propName, componentName) => {
    const itemTypes = props.itemTypes;

    if (!itemTypes) {
      return new Error(
        `Required prop \`${propName}\` was not specified in \`${componentName}\`.`
      );
    }

    const itemTypesArray = [];

    if (_.isArray(itemTypes)) {
      itemTypes.forEach(item => itemTypesArray.push(item));
    } else if (_.isObject(itemTypes)) {
      itemTypesArray.push(itemTypes);
    } else {
      throw new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
        `Expected \`${propName}\` to be an object or an array of objects.`
      );
    }

    itemTypesArray.forEach((item) => {
      if (!item.type || !item.component || !item.height) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have required type, component, and height properties.`
        );
      } else if (!_.isString(item.type)) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have a type property of type String.`
        );
      } else if (!_.isNumber(item.height)) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have a height property of type Number.`
        );
      } else if (!_.isFunction(item.component)) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have a component property of type Function.`
        );
      }
    });

    return null;
  },
  thresholdRows: React.PropTypes.number,
};

export default List;
