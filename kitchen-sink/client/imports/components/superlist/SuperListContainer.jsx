import React from 'react';
import Options from './Options';
import ListItem from './ListItem';
import { SuperList } from '../../lib/index';

class SuperListContainer extends React.Component {
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


  render() {
    const { list, images } = this.state;

    return (
      <div>
        <Options
          addImages={this.addImages}
          changeListLength={this.changeListLength}
          changeListThreshold={this.changeListThreshold}
        />
        <SuperList
          className="SuperList"
          rowHeight={ images ? 240 : 18 }
          list={ list }
          listItem={ <ListItem images={images} /> }
        />
      </div>
    );
  }
}

export default SuperListContainer;

/* Using rowRenderer function for rows
    <SuperList
      className="SuperList"
      rowHeight={ images ? 240 : 18 }
      list={ list }
      rowRenderer={ (index) => <div> {index + index}</div> }
    />
*/

/* Using default renderer for rows
    <SuperList
      className="SuperList"
      rowHeight={ images ? 240 : 18 }
      list={ list }
    />
*/

/* Using given ListItem for rows
    <SuperList
      className="SuperList"
      rowHeight={ images ? 240 : 18 }
      list={ list }
      ListItem={ <ListItem images={images} /> }
    />
*/
