import _ from 'lodash';
import React from 'react';

export default class AnimatedStack extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isInTransition: false,
      layersStyles: this.getDefaultStyles(props.activeLayerIndex)
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

  getAnimationObject(currentIndex, nextIndex) {
    let isReverse = false;

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
        return true;
      }

      const fromMatchBackward = from === nextIndex;
      const toMatchBackward = to === currentIndex;

      const isBackward =
        (fromExist && fromMatchBackward && toExist && toMatchBackward) ||
        (fromExist && fromMatchBackward && !toExist) ||
        (!fromExist && toExist && toMatchBackward);

      if (isBackward) {
        isReverse = true;
        return true;
      }
    });

    if (!animation) {
      return null
    }

    if (!isReverse) {
      return animation.use();
    }

    if (animation.reverse) {
      return animation.reverse();
    }

    const animationObject = animation.use();

    exchangeVaules(animationObject, 'currentLayer', 'nextLayer');
    _.each(animationObject, (value, key) => {
      value && exchangeVaules(value, 'startStyle', 'endStyle');
    });

    return animationObject;
  }

  // layer: 'currentlayer' | 'nextLayer'
  // type: 'startStyle' | 'endStyle'
  getStyleForLayer(animationObject, layer, type, index) {
    const style = _.get(animationObject, [layer, type]);

    if (!style) {
      return {};
    }

    if (type === 'endStyle') {
      style.transition = animationObject[layer].transition;
    } else if (this.state.isInTransition) {
      style.transition = _.get(this.state.layersStyles, [index, 'transition'])
    }

    return style;
  }

  // type: 'startStyle' | 'endStyle'
  layersStylesForAnimation(defaultStyles, currentIndex, nextIndex, animationObject, type) {
    const layersStyles = _.cloneDeep(defaultStyles);

    _.extend(
      layersStyles[currentIndex],
      this.getStyleForLayer(animationObject, 'currentLayer', type, currentIndex)
    );

    _.extend(
      layersStyles[nextIndex],
      this.getStyleForLayer(animationObject, 'nextLayer', type, nextIndex)
    );

    return layersStyles;
  }

  componentWillReceiveProps(nextProps) {
    const currentIndex = this.props.activeLayerIndex;
    const nextIndex = nextProps.activeLayerIndex;

    if (currentIndex !== nextIndex) {
      const animationObject = this.getAnimationObject(currentIndex, nextIndex);

      if (!animationObject) {
        this.setState({
          isInTransition: false,
          layersStyles: this.getDefaultStyles(nextIndex)
        });
        return
      }

      const defaultStyles = this.getDefaultStyles(currentIndex, nextIndex);

      const layersStylesStart = this.layersStylesForAnimation(
        defaultStyles, currentIndex, nextIndex, animationObject, 'startStyle'
      );
      this.setState({layersStyles: layersStylesStart});

      setTimeout(() => {
        const layersStylesEnd = this.layersStylesForAnimation(
          defaultStyles, currentIndex, nextIndex, animationObject, 'endStyle'
        );
        this.setState({
          isInTransition: true,
          layersStyles: layersStylesEnd
        });
      });
    }
  }

  handleTransitionEnd(e) {
    this.setState({
      isInTransition: false,
      layersStyles: this.getDefaultStyles(this.props.activeLayerIndex)
    });
  }

  render () {
    const {children, animations, activeLayerIndex, ...other} = this.props;
    const layers = children.map((child) => {
      const {index} = child.props;

      return (
        <div
          key={index}
          style={this.state.layersStyles[index]}
          onTransitionEnd={(e) => this.handleTransitionEnd(e)}>
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

function exchangeVaules(obj, first, second) {
  const temp = obj[first];
  obj[first] = obj[second];
  obj[second] = temp;
  return obj;
}
