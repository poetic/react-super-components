import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import 'react-virtualized/styles.css';

class List extends React.Component {
  constructor() {
    super();
    this.rowRenderer = this.rowRenderer.bind(this);
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
      const typeToMatch = itemType.type;

      if (typeToMatch === dataItem.type) {
        return itemType;
      }
    }

    throw new Error(
      'Invalid prop `data` supplied to `' + componentName + '`. An object of `'
      + propName + '` is missing the required property `type`.'
    );
  }

  render() {
    const {
      className,
      thresholdRows,
      data,
    } = this.props;

    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualScroll
            className={ className }
            width={width}
            height={height}
            rowsCount={ data.length }
            rowHeight={ index => (this.rowHeight(index, data)) }
            rowRenderer={ index => (this.rowRenderer(index, data)) }
            overscanRows={ thresholdRows }
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
        'Required prop `' + propName + '` was not specified in `' + componentName + '`.'
      );
    }

    if (data.constructor !== Array) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName +
        '`. Expected `' + propName + '` to be an array of objects.'
      );
    }

    let nonObjectDataCount = 0;
    let dataWithoutTypeCount = 0;
    let dataWithNonStringTypeProperty = 0;

    data.forEach((dataItem) => {
      if (dataItem.constructor !== Object) {
        nonObjectDataCount++;
      } else if (!dataItem.type) {
        dataWithoutTypeCount++;
      } else if (dataItem.type.constructor !== String) {
        dataWithNonStringTypeProperty++;
      }
    });

    if (nonObjectDataCount > 0) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName +
        '`. Expected `' + propName + '` to be an array of objects.'
      );
    }

    if (dataWithoutTypeCount > 0) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. An object of `'
        + propName + '` is missing the required property `type`.'
      );
    }

    if (dataWithNonStringTypeProperty > 0) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to `' + componentName + '`. An object of `'
        + propName + '` has a TypeError for the required property `type`.'
      );
    }
  },
  itemTypes: (props, propName, componentName) => {
    const itemTypes = props.itemTypes;

    if (!itemTypes) {
      return new Error(
        'Required prop `' + propName + '` was not specified in `' + componentName + '`.'
      );
    }

    //if (itemTypes.constructor === Array) {
      //let nonObjectItemTypes;

      //itemTypes.forEach((itemType) => {
        //if (itemType.constructor === Object) {
          //nonObjectItemTypes++
        //}
      //}
    //}

    //if (nonObjectItemTypes > 0) {
      //return new Error(
        //'Invalid prop `' + propName + '` supplied to `' + componentName + '`. An object of `'
        //+ propName + '` is missing the required property `type`.'
      //);
    //}
    //if (dataWithNonStringTypeProperty > 0) {
      //return new Error(
        //'Invalid prop `' + propName + '` supplied to `' + componentName + '`. An object of `'
        //+ propName + '` has a TypeError for the required property `type`.'
      //);
    //}
  },
};

export default List;
  //itemTypes: React.PropTypes.oneOfType([
    //React.PropTypes.arrayOf(
      //React.PropTypes.shape({
        //height: React.PropTypes.number,
        //type: React.PropTypes.string,
        //class: React.PropTypes.function,
      //})
    //),
    //React.PropTypes.shape({
      //height: React.PropTypes.number,
      //type: React.PropTypes.string,
      //class: React.PropTypes.function,
    //}),
  //]).isRequired,
  //thresholdRows: PropTypes.number,
