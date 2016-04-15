import React, { PropTypes } from 'react';
import { AutoSizer, VirtualScroll } from 'react-virtualized';

class List extends React.Component {
  rowRenderer(index, list) {
    let item = list[index];
    return item;
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

List.PropTypes = {
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

export default List;
