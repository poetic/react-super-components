import React from 'react';
import ReactDOM from 'react-dom';
import { SuperImage } from 'react-super-components';
import { VirtualScroll } from 'react-virtualized';
import ReactList from 'react-list';
import './styles.css'; // only needs to be imported once

const list = Array.from(Array(1000).keys());

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  render() {
    if (this.state.list === 'virtual') {
      return (
        <div id='virtual-scroll-wrapper'>
          <button onClick={ () => { this.setState({ list: 'false' }) } }>react-list</button>
          <VirtualScroll
            width={320}
            height={500}
            rowsCount={list.length}
            rowHeight={20}
            rowRenderer={
              index => list[index] // Could also be a DOM element
            }
          />
        </div>
      );
    }

    return (
      <div id='virtual-scroll-wrapper' style={{ width: '320px', height: '500px', overflow: 'scroll' }}>
        <button onClick={ () => { this.setState({ list: 'virtual' }) } }>virtual-list</button>
        <ReactList
          itemRenderer={
            index => <div key={index}> {list[index]} </div>
          }
          length={list.length}
          type='uniform'
         />
      </div>
    );
  }
}

