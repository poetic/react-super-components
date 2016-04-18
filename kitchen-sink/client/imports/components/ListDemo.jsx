import React from 'react'
import List from '../lib/List';

const list = Array.from(Array(1000).keys());

export default class ListDemo extends React.Component {
  render () {
    return (
      <div style={{ height: '100vh' }}>
        <List
          className="SuperList"
          rowHeight={ 18 }
          list={ list }
        />
      </div>
    );
  }
}
