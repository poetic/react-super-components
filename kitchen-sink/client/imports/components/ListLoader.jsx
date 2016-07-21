import React from 'react';

class ListLoader extends React.Component {
  render() {
    return (
      <div className={this.props.isActiveClass}>
        <h1>SuperList Loading</h1>
      </div>
    );
  }
}

export default ListLoader;

