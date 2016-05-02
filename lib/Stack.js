import React, { PropTypes } from 'react';
import _ from 'lodash';
import ParamStore from 'param-store';

const { string, array } = PropTypes;

export default class Stack extends React.Component {
  constructor (props) {
    super(props);
    this.state = {activeLayerIndex: ParamStore.get(props.index)};
  }

  componentWillMount() {
    this.listener = ParamStore.listen(
      this.props.index,
      ({changedParams}) => {
        this.setState({activeLayerIndex: changedParams[this.props.index]});
      }
    )
  }

  componentWillUnmount() {
    ParamStore.unlisten(this.listener);
  }

  activeLayerIndex() {
    return _.find([
      this.props.activeLayerIndex,
      this.state.activeLayerIndex,
      this.props.defaultActiveLayerId
    ], _.isString);
  }

  activeLayer() {
    return _.find(
      this.props.children,
      (child) => child.props.index === _.toString(this.activeLayerIndex())
    );
  }

  animatedLayers() {
    return null
  }

  render() {
    return (
      <div>
        { this.props.animations ? this.animatedLayers() : this.activeLayer() }
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
