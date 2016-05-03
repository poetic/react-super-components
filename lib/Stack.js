import React, { PropTypes } from 'react';
import _ from 'lodash';
import ParamStore from 'param-store';
import SimpleStack from './SimpleStack';
import AnimatedStack from './AnimatedStack';

const { string, array } = PropTypes;

export default class Stack extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};

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
      );
    }
  }

  componentWillUnmount() {
    ParamStore.unlisten(this.listener);
  }

  isAnimated() {
    return _.get(this.props, 'animations.length');
  }

  getFirstLayerIndex() {
    return this.props.children.map((child) => child.props.index);
  }

  getActiveLayerIndex() {
    return _.find([
      this.props.activeLayerIndex,
      this.state.activeLayerIndex,
      this.props.defaultActiveLayerIndex,
      this.getFirstLayerIndex()
    ], _.isString);
  }

  render() {
    const other = _.omit(this.props, [
      'index',
      'children',
      'animations',
      'activeLayerIndex'
    ])

    const {children, animations} = this.props;
    const activeLayerIndex = this.getActiveLayerIndex();

    if (this.isAnimated()) {
      return (
        <AnimatedStack
          children={children}
          animations={animations}
          activeLayerIndex={activeLayerIndex} />
      );
    } else {
      return (
        <SimpleStack
          children={children}
          activeLayerIndex={activeLayerIndex} />
      );
    }
  }
}

Stack.PropTypes = {
  index: string,
  children: (props, propName, componentName) => {
    const errorContext = `Invalid prop \`${propName}\` supplied to \`${componentName}\`. `;

    if (!props.children) {
      return new Error(errorContext + 'Children can not be null.')
    }

    if (!props.children.length) {
      return new Error(errorContext + 'You must provide at least one child.')
    }

    props.children.forEach((child) => {
      if (!_.isString(child.props.index)) {
        return new Error(errorContext + 'Each child must have an index prop.')
      }
    })
  },
  animations: array,
  activeLayerIndex: string
};
