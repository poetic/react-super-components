import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';

class SuperList extends React.Component {
  constructor() {
    super();
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer(index, list) {
    const { rowRenderer, listItem } = this.props;

    if (rowRenderer) {
      return rowRenderer(index, list);
    }

    if (listItem) {
      return (
        React.cloneElement(
          listItem,
          { index, list }
        )
      );
    }

    return list[index];
  }

  render() {
    const {
      className,
      thresholdRows,
      scrollToIndex,
      list,
      rowHeight,
      noRowsRenderer,
    } = this.props;

    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualScroll
            className={ className }
            width={width}
            height={height}
            rowsCount={ list.length }
            rowHeight={ rowHeight }
            rowRenderer={ index => (this.rowRenderer(index, list)) }
            noRowsRenderer={ noRowsRenderer }
            overscanRows={ thresholdRows }
            scrollToIndex={ scrollToIndex }
          />
        )}
      </AutoSizer>
    );
  }
}

SuperList.propTypes = {
  className: PropTypes.string,
  noRowsRenderer: PropTypes.func,
  thresholdRows: PropTypes.number,
  rowHeight: PropTypes.oneOfType(
              [PropTypes.string, PropTypes.number]
             ).isRequired,
  list: PropTypes.array.isRequired,
  rowRenderer: PropTypes.func,
  listItem: PropTypes.object,
  scrollToIndex: PropTypes.func,
};

export default SuperList;
