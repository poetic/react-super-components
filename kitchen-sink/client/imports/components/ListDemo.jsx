import React from 'react';
import Options from './superlist/Options';
import { List } from '../lib/index.js';
import { Header, ShortListItem, TallListItem } from './superlist/ListItems.jsx';

class ListDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      groupData: false,
      list: [],
      listLength: 1000,
      thresholdRows: 10,
    };
    this.setGroupData = this.setGroupData.bind(this);
    this.setListLength = this.setListLength.bind(this);
    this.setListThreshold = this.setListThreshold.bind(this);
  }

  setGroupData() {
    this.setState({ groupData: !this.state.groupData });
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

    // add property to data ot groupby
    for (let i = 0; i < listLength; i++) {
      if (varying) {
        if (i % 3 === 0) {
          list.push({ type: 'tall' });
        } else {
          list.push({ type: 'short' });
        }
      } else {
        list.push(i);
      }
    }

    return list;
  }

  render() {
    const { listLength, thresholdRows } = this.state;
    const list = this.createList(listLength);
    const varyingList = this.createList(listLength, true);
    const itemTypes = [
      { type: 'header', height: 50, component: Header },
      { type: 'tall', height: 100, component: TallListItem },
      { type: 'short', height: 50, component: ShortListItem },
    ];
    const groupBy = 'type';

    return (
      <div>
        <h1>SuperList</h1>
        <Options
          setGroupData={this.setGroupData}
          setListLength={this.setListLength}
          setListThreshold={this.setListThreshold}
        />
        <div style={{ marginBottom: '50px' }}>
          <h3>One Component List</h3>
          <div style={{ border: '1px solid #ddd', height: '30vh' }}>
            <List
              data={ list }
              itemTypes={ { height: 50, component: ShortListItem } }
              thresholdRows={ thresholdRows }
            />
          </div>
        </div>
        <div style={{ marginBottom: '50px' }}>
          <h3>Varying Heights Components List</h3>
          <div style={{ border: '1px solid #ddd', height: '30vh' }}>
            <List
              data={ varyingList }
              itemTypes={ itemTypes }
              thresholdRows={ thresholdRows }
              groupBy={ this.state.groupData ? groupBy : null }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListDemo;

