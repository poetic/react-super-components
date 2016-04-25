import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import 'react-virtualized/styles.css';

class List extends React.Component {
  checkTypesAndReturnMatchingItemType(index, data) {
    const { itemTypes } = this.props;
    const dataItem = data[index];

    if (itemTypes.constructor === Array) {
      const typesToMatch = itemTypes.map(item => item.type);

      if (typesToMatch.includes(dataItem.type)) {
        const itemType = _.findWhere(itemTypes, { type: dataItem.type });

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
    const ListItemClass = itemType.class;

    return <ListItemClass data={data} index={index} />;
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

    if (data.constructor !== Array) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
        `Expected \`${propName}\` to be an array of objects.`
      );
    }

    data.forEach((dataItem) => {
      if (dataItem.constructor !== Object) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` to be an array of objects.`
        );
      } else if (!dataItem.type) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. An object of ` +
          `\`${propName}\` is missing the required property \`type\`.`
        );
      } else if (dataItem.type.constructor !== String) {
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

    switch (itemTypes.constructor) {
      case (Object): {
        itemTypesArray.push(itemTypes);
        break;
      }
      case (Array): {
        itemTypes.forEach(item => itemTypesArray.push(item));
        break;
      }
      default:
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` to be an object or an array of objects.`
        );
    }

    itemTypesArray.forEach((item) => {
      if (!item.type || !item.class || !item.height) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have required type, class, and height properties.`
        );
      } else if (item.type.constructor !== String) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have a type property of type String.`
        );
      } else if (item.height.constructor !== Number) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have a height property of type Number.`
        );
      } else if (item.class.constructor !== Function) {
        throw new Error(
          `Invalid prop \`${propName}\` supplied to \`${componentName}\`. ` +
          `Expected \`${propName}\` object to have a class property of type Function.`
        );
      }
    });

    return null;
  },
  thresholdRows: React.PropTypes.number,
};

export default List;
