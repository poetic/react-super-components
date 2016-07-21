import React, { PropTypes } from 'react';

const { string, array } = PropTypes;

export default class SimpleStack extends React.Component {
  render () {
    const { activeLayerIndex, children, ...other } = this.props

    const activeLayer =
      children.find((child) => child.props.index === activeLayerIndex) ||
      children.find((child) => child.props.index === '*');

    return (
      <div {...other}>
        {activeLayer}
      </div>
    );
  }
}

SimpleStack.PropTypes = {
  activeLayerIndex: string.isRequired,
  children: array.isRequired
}
