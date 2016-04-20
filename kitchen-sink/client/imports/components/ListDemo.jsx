import React from 'react';
import Options from './superlist/Options';
import { List } from '../lib/index.js';
import { ShortListItem, TallListItem } from './superlist/ListItems.jsx';

class ListDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      thresholdRows: 10,
      listLength: 1000,
    };
    this.setListLength = this.setListLength.bind(this);
    this.setListThreshold = this.setListThreshold.bind(this);
  }

  setListLength(listLength) {
    this.setState({ listLength });
  }

  setListThreshold(value) {
    const numberValue = Number(value);
    const thresholdRows = Math.ceil(numberValue / 18);

    this.setState({ thresholdRows });
  }

  createList(listLength, varying) {
    const list = [];

    for (let i = 0; i < listLength; i++) {
      if (varying) {
        if (i % 3 === 0) {
          list.push({ type: 'tall' });
        } else {
          list.push({ type: 'short' });
        }
      } else {
        list.push({ type: 'short' });
      }
    }

    return list;
  }

  render() {
    const { listLength, thresholdRows } = this.state;
    const list = this.createList(listLength);
    const varyingList = this.createList(listLength, true);
    const itemTypes = [
      { type: 'tall', height: 100, class: TallListItem },
      { type: 'short', height: 50, class: ShortListItem },
    ];

    return (
      <div>
        <h1>SuperList</h1>
        <Options
          setListLength={this.setListLength}
          setListThreshold={this.setListThreshold}
          setVaryingHeight={this.setVaryingHeight}
        />
        <div style={{ marginBottom: '50px' }}>
          <h3>One Component List</h3>
          <div style={{ border: '1px solid #ddd', height: '30vh' }}>
            <List
              data={ list }
              itemTypes={ itemTypes[1] }
              thresholdRows={ thresholdRows }
            />
          </div>
        </div>
        <div>
          <h3>Varying Heights Components List</h3>
          <div style={{ border: '1px solid #ddd', height: '30vh' }}>
            <List
              data={ varyingList }
              itemTypes={ itemTypes }
              thresholdRows={ thresholdRows }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListDemo;

