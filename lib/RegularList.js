import List from './List';
import React, { PropTypes } from 'react';
import _ from 'lodash';

class RegularList extends List {
  render() {
    const data = this.checkForModificationsAndReturnModifiedData(this.props.data);
    const style = {
      width: '100%',
      height: '100%',
      overflow: 'scroll',
    };
    return (
      <div style={ style }>
        { data.map((dataItem, index) => this.rowRenderer({ index, data, hasKey: true })) }
      </div>
    )
  }
}

export default RegularList;
