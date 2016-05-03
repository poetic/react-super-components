import _ from 'lodash';
import React from 'react';

export default class AnimatedStack extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      layerStyles: this.getDefaultStyles(props.activeLayerIndex)
    }
  }

  getDefaultStyles(currentIndex, nextIndex) {
    const {children} = this.props;
    const activeIndexes = [currentIndex, nextIndex].filter(_.isString)

    return children.reduce((acc, child) => {
      const {index} = child.props;

      acc[index] = { position: 'absolute' };

      const active = _.includes(activeIndexes, index);

      // move inactive layers in the background
      if (!active) {
        acc[index]['zIndex'] = '-1000'
      }

      return acc;
    }, {})
  }

  findAnimation(currentIndex, nextIndex) {
    let direction;

    const animation = _.find(this.props.animations, ({from, to}) => {
      const fromExist = _.isString(from);
      const toExist = _.isString(to);

      const fromMatchForward = from === currentIndex;
      const toMatchForward = to === nextIndex;

      const isForward =
        (fromExist && fromMatchForward && toExist && toMatchForward) ||
        (fromExist && fromMatchForward && !toExist) ||
        (!fromExist && toExist && toMatchForward);

      if (isForward) {
        direction = 'FORWARD';
        return true;
      }

      const fromMatchBackward = from === nextIndex;
      const toMatchBackward = to === currentIndex;

      const isBackward =
        (fromExist && fromMatchBackward && toExist && toMatchBackward) ||
        (fromExist && fromMatchBackward && !toExist) ||
        (!fromExist && toExist && toMatchBackward);

      if (isBackward) {
        direction = 'BACKWARD';
        return true;
      }
    });

    return {animation, direction};
  }

  getStyleForLayer({currentLayer, nextLayer}, thisLayer, direction, type) {
    const isCurrentLayer =
      (thisLayer === 'CURRENT' && direction === 'FORWARD') ||
      (thisLayer === 'NEXT' && direction === 'BACKWARD');

    const layerInUse = isCurrentLayer ? currentLayer : nextLayer;

    const isStartStyle =
      (type === 'START' && direction === 'FORWARD') ||
      (type === 'END' && direction === 'BACKWARD')
    const styleInUse = isStartStyle
      ? layerInUse.startStyle
      : layerInUse.endStyle;

    return _.extend({transition: layerInUse.transition}, styleInUse);
  }

  // NOTE: type can be 'START' or 'END'
  setLayerStylesForAnimation(currentIndex, nextIndex, type) {
    const {animation, direction} = this.findAnimation(currentIndex, nextIndex);
    if (!animation) {
      return
    }

    // TODO: handle string as 'use' and create custom animation
    const animationObject = animation.use();

    const layerStyles = this.getDefaultStyles(currentIndex, nextIndex);
    _.extend(
      layerStyles[currentIndex],
      this.getStyleForLayer(animationObject, 'CURRENT', direction, type)
    );
    _.extend(
      layerStyles[nextIndex],
      this.getStyleForLayer(animationObject, 'NEXT', direction, type)
    );

    this.setState({layerStyles});
  }

  componentWillReceiveProps(nextProps) {
    const currentIndex = this.props.activeLayerIndex;
    const nextIndex = nextProps.activeLayerIndex;

    if (currentIndex !== nextIndex) {
      this.setLayerStylesForAnimation(currentIndex, nextIndex, 'START');
      setTimeout(() => {
        this.setLayerStylesForAnimation(currentIndex, nextIndex, 'END');
      });
    }
  }

  render () {
    const {children, animations, activeLayerIndex, other} = this.props;
    const layers = children.map((child) => {
      const {index} = child.props;

      return (
        <div key={index} style={this.state.layerStyles[index]}>
          {child}
        </div>
      );
    })

    return (
      <div {...other}>
        {layers}
      </div>
    )
  }
}
