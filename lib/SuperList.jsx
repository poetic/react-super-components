import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';

class SuperList extends React.Component {
  constructor() {
    super();
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer(index, list) {
    const { rowRenderer } = this.props;

    if (rowRenderer) {
      return rowRenderer(index, list);
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
            overscanRows={ thresholdRows }
          />
        )}
      </AutoSizer>
    );
  }
}

SuperList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array.isRequired,
  rowHeight: PropTypes.oneOfType(
              [PropTypes.string, PropTypes.number]
             ).isRequired,
  rowRenderer: PropTypes.func,
  thresholdRows: PropTypes.number,
};

export default SuperList;
