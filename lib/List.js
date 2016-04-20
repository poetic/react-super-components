import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';
import 'react-virtualized/styles.css';

class List extends React.Component {
  constructor() {
    super();
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer(index, data) {
    const { itemTypes } = this.props;
    const dataItem = data[index];

    if (!itemTypes) {
      return new Error('itemTypes are required.');
    }

    if (!dataItem || !dataItem.type) {
      return new Error(
        'Data items are required and must have a type that matches a passed type from itemTypes.'
      );
    }

    switch (itemTypes.constructor) {
      case (Array): {
        const typesToMatch = itemTypes.map(item => item.type);

        if (typesToMatch.includes(dataItem.type)) {
          const ListItemClass = _.findWhere(itemTypes, { type: dataItem.type }).class;

          return <ListItemClass data={data} index={index} />;
        }

        return new Error('Data Item failed to match a passed type from itemTypes.');
      }

      case (Object): {
        const typeToMatch = itemTypes.type;

        if (typeToMatch === dataItem.type) {
          const ListItemClass = itemTypes.class;

          return <ListItemClass data={data} index={index} />;
        }

        return new Error('Data Item failed to match a passed type from itemTypes.');
      }

      default:
        return new Error('itemTypes must be an Array or an Object.');
    }
  }

  rowHeight(index, data) {
    const { itemTypes } = this.props;
    const dataItem = data[index];

    if (!itemTypes) {
      return new Error('itemTypes are required.');
    }

    if (!dataItem || !dataItem.type) {
      return new Error(
        'Data items are required and must have a type that matches a passed type from itemTypes.'
      );
    }

    switch (itemTypes.constructor) {
      case (Array): {
        const typesToMatch = itemTypes.map(item => item.type);

        if (typesToMatch.includes(dataItem.type)) {
          const itemHeight = _.findWhere(itemTypes, { type: dataItem.type }).height;

          return itemHeight;
        }

        return new Error('Data Item failed to match a passed type from itemTypes.');
      }

      case (Object): {
        const typeToMatch = itemTypes.type;

        if (typeToMatch === dataItem.type) {
          const itemHeight = itemTypes.height;

          return itemHeight;
        }

        return new Error('Data Item failed to match a passed type from itemTypes.');
      }

      default:
        return new Error('itemTypes must be an Array or an Object.');
    }
  }

  render() {
    console.log('render list')
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
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  itemTypes: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.object),
    React.PropTypes.object,
  ]).isRequired,
  thresholdRows: PropTypes.number,
};

export default List;
