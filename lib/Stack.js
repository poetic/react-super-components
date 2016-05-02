import React, { PropTypes } from 'react';
import _ from 'lodash';
import ParamStore from 'param-store';

const { string, array } = PropTypes;

export default class Stack extends React.Component {
  constructor (props) {
    super(props);

    // TODO: assert that all children have index as a prop

    this.state = { layerStyles: {} };

    // only set index as state and change it when we have a index prop
    if (props.index) {
      this.state.activeLayerIndex = ParamStore.get(props.index);
    }
  }

  componentWillMount() {
    if (this.props.index) {
      this.listener = ParamStore.listen(
        this.props.index,
        ({changedParams}) => {
          this.setState({activeLayerIndex: changedParams[this.props.index]});
        }
      )
    }
  }

  componentWillUnmount() {
    ParamStore.unlisten(this.listener);
  }

  indexes() {
    return this.props.children.map((child) => child.props.index);
  }

  activeLayerIndex() {
    return _.find([
      this.props.activeLayerIndex,
      this.state.activeLayerIndex,
      this.props.defaultActiveLayerIndex,
      this.indexes[0]
    ], _.isString);
  }

  activeLayer() {
    return _.find(
      this.props.children,
      (child) => child.props.index === _.toString(this.activeLayerIndex())
    );
  }

  animatedLayers() {
    const layers = this.props.children.map((child) => {
      return (
        <div style={this.state.layerStyles[child.props.index]}>
          {React.cloneElement(child, {fronzen: false})}
        </div>
      );
    });

    return (
      <div>
        {layers}
      </div>
    );
  }

  render() {
    const other = _.omit(this.props, [
      'index',
      'children',
      'animations',
      'activeLayerIndex'
    ])

    return (
      <div {...other}>
        {this.props.animations ? this.animatedLayers() : this.activeLayer()}
      </div>
    )
  }
}

Stack.PropTypes = {
  index: string,
  children: array.isRequired,
  animations: array,
  activeLayerIndex: string
};
