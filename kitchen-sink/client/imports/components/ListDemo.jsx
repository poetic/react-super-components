import React from 'react';
import Options from './superlist/Options';
import { List } from '../lib/index.js';

class ListDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      images: false,
      list: [],
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.addImages = this.addImages.bind(this);
    this.changeListLength = this.changeListLength.bind(this);
    this.changeListThreshold = this.changeListThreshold.bind(this);
  }

  componentWillMount() {
    const list = Array.from(Array(Number(1000)).keys());

    this.setState({ list });
  }

  addImages() {
    this.setState({ images: !this.state.images });
  }

  changeListLength(value) {
    const list = Array.from(Array(Number(value)).keys());

    this.setState({ list });
  }

  changeListThreshold(value) {
    const numberValue = Number(value);
    let overscanRows;

    if (this.state.images) {
      overscanRows = Math.ceil(numberValue / 240);
    } else {
      overscanRows = Math.ceil(numberValue / 18);
    }

    this.setState({ threshold: numberValue, overscanRows });
  }

  renderRows(index, list, images) {
    if (images) {
      return (
        <div key={index}>
          <img src={index % 2 === 0 ? '/images/Frog.jpg' : '/images/Castle.jpg'} />
        </div>
      );
    }

    return (
      <div key={index}>
        %{list[index]}
      </div>
    );
  }

  render() {
    const { list, images } = this.state;

    return (
      <div style={{ height: '100vh' }}>
        <Options
          addImages={this.addImages}
          changeListLength={this.changeListLength}
          changeListThreshold={this.changeListThreshold}
        />
        <List
          className="SuperList"
          rowHeight={ images ? 240 : 18 }
          list={ list }
          rowRenderer={ (index) => this.renderRows(index, list, images) }
        />
      </div>
    );
  }
}

export default ListDemo;

/* Using rowRenderer function for rows
  <SuperList
    className="SuperList"
    rowHeight={ images ? 240 : 18 }
    list={ array }
    rowRenderer={ (index, list) => <div>{list[index]}</div> }
  />
*/

/* Using default renderer for rows
  <SuperList
    className="SuperList"
    rowHeight={ images ? 240 : 18 }
    list={ array }
  />
*/
