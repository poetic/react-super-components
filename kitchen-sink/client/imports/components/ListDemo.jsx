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
      listToDisplay: 'single',
      sortData: false,
      thresholdRows: 10,
    };
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

  setStatusMessage(groupData, sortData) {
    if (groupData && sortData) {
      return '(Grouped by height and sorted by Data Value)';
    } else if (groupData) {
      return '(Grouped by height)';
    } else if (sortData) {
      return '(Sorted by Data Value)';
    }

    return null;
  }

  setSortData() {
    this.setState({ sortData: !this.state.sortData });
  }

  changeDisplayedList(listToDisplay) {
    this.setState({ listToDisplay, groupData: false, sortData: false });
  }

  createList(listLength, listType) {
    const list = [];

    if (listType === 'multiple') {
      for (let i = 0; i < listLength; i++) {
        if (i % 3 === 0) {
          list.push({
            type: 'tall',
            category: 'Taller List Items',
            randomNumber: Math.ceil(Math.random() * 100),
          });
        } else {
          list.push({
            type: 'short',
            category: 'Shorter List Items',
            randomNumber: Math.ceil(Math.random() * 100),
          });
        }
      }
    } else {
      for (let i = 0; i < listLength; i++) {
        list.push({
          randomNumber: Math.ceil(Math.random() * 100),
        });
      }
    }

    return list;
  }

  returnDisplayedList(listToDisplay) {
    const { groupData, listLength, sortData, thresholdRows } = this.state;
    const list = this.createList(listLength, listToDisplay);
    const itemTypes = [
      { type: 'header', height: 50, component: Header },
      { type: 'tall', height: 100, component: TallListItem },
      { type: 'short', height: 50, component: ShortListItem },
    ];
    const groupBy = 'category';
    const sortBy = 'randomNumber';

    if (listToDisplay === 'multiple') {
      return (
        <div>
          <h3> Multiple Components List</h3>
          <span>
            {this.setStatusMessage(groupData, sortData)}
          </span>
          <div style={{ border: '1px solid #ddd', height: '40vh', marginTop: '10px' }}>
            <List
              data={ list }
              itemTypes={ itemTypes }
              groupBy={ groupData ? groupBy : null }
              sortBy={ sortData ? sortBy : null }
              thresholdRows={ thresholdRows }
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3>One Component List</h3>
        <span>
          {this.setStatusMessage(groupData, sortData)}
        </span>
        <div style={{ border: '1px solid #ddd', height: '40vh', marginTop: '10px' }}>
          <List
            data={ list }
            itemTypes={ { height: 50, component: ShortListItem } }
            thresholdRows={ thresholdRows }
            sortBy={ sortData ? sortBy : null }
          />
        </div>
      </div>
    );
  }

  render() {
    const listToDisplay = this.state.listToDisplay;

    return (
      <div>
        <h1>SuperList</h1>
        <Options
          changeDisplayedList={list => this.changeDisplayedList(list)}
          setGroupData={() => this.setGroupData()}
          setListLength={() => this.setListLength()}
          setListThreshold={() => this.setListThreshold()}
          setSortData={() => this.setSortData()}
        />
        { this.returnDisplayedList(listToDisplay) }
      </div>
    );
  }
}

export default ListDemo;

