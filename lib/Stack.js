import React, { PropTypes } from 'react';
import _ from 'lodash';
import ParamStore from 'param-store';

const { string, array } = PropTypes;

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

  animatedLayers() {
    return null
  }

  render() {
    const { children, defaultActiveLayerId, animations, ...other } = this.props;

    const activeLayerId = _.find([
      this.props.activeLayerId,
      this.state.activeLayerId,
      defaultActiveLayerId
    ], _.isString);

    if (!animations) {
      const activeLayer = _.find(
        children,
        (child) => child.props.id === _.toString(activeLayerId)
      );

      return <div {...other}>{activeLayer}</div>;
    } else {
      return (
        <div {...other}>
          {this.animatedLayers()}
        </div>
      );
    }
  }
}

Stack.PropTypes = {
  id: string,
  children: array.isRequired,
  animations: array,
  activeLayerId: string
};
