import React from 'react';
import Options from './superlist/Options';
import { List } from 'react-super-components'; // this currently does not work, same with image
//import { List } from '../lib/index.js'; // this does work

class ListDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      images: false,
      list: [],
      thresholdRows: 10,
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.setListLength = this.setListLength.bind(this);
    this.setListThreshold = this.setListThreshold.bind(this);
    this.addImages = this.addImages.bind(this);
  }

  componentWillMount() {
    this.setListLength(1000);
  }

  setListLength(value) {
    const list = Array.from(Array(Number(value)).keys());

    this.setState({ list });
  }

  setListThreshold(value) {
    const numberValue = Number(value);
    let thresholdRows;

    if (this.state.images) {
      thresholdRows = Math.ceil(numberValue / 240);
    } else {
      thresholdRows = Math.ceil(numberValue / 18);
    }

    this.setState({ thresholdRows });
  }

  addImages() {
    this.setState({ images: !this.state.images });
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
    const { images, list, thresholdRows } = this.state;

    return (
      <div>
        <Options
          addImages={this.addImages}
          setListLength={this.setListLength}
          setListThreshold={this.setListThreshold}
        />
        <List
          className="SuperList"
          rowHeight={ images ? 240 : 18 }
          list={ list }
          rowRenderer={ (index) => this.renderRows(index, list, images) }
          thresholdRows={ thresholdRows }
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
    list={ list }
    rowRenderer={ (index) => <div>{list[index]}</div> }
    thresholdRows={ thresholdRows }
  />
*/

/* Using default renderer for rows
  <SuperList
    className="SuperList"
    rowHeight={ 18 }
    list={ list }
    thresholdRows={ thresholdRows }
  />
*/
