import React, { PropTypes } from 'react';
import _ from 'lodash';
import ParamStore from 'param-store';

const { string, array, object } = PropTypes;

export default class Stack extends React.Component {
  constructor (props) {
    super(props);
    this.state = {activeLayerId: ParamStore.get(props.id)};
  }

  componentWillMount() {
    this.listener = ParamStore.listen(
      this.props.id,
      ({changedParams}) => {
        this.setState({activeLayerId: changedParams[this.props.id]});
      }
    )
  }

  componentWillUnmount() {
    ParamStore.unlisten(this.listener);
  }

  activeLayerId() {
    return _.find([
      this.props.activeLayerId,
      this.state.activeLayerId,
      this.props.defaultActiveLayerId
    ], _.isString);
  }

  activeLayer() {
    return _.find(
      this.props.children,
      (child) => child.props.id === _.toString(this.activeLayerId())
    );
  }

  animatedLayers() {
    return null
  }

  render() {
    return (
      <div style={ this.props.style }>
        { this.props.animations ? this.animatedLayers() : this.activeLayer() }
      </div>
    )
  }
}

Stack.PropTypes = {
  id: string,
  children: array.isRequired,
  animations: array,
  activeLayerId: string,
  style: object,
};
