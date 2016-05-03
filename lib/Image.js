import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery-inview';
import LoaderStack from './LoaderStack';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'loading' };
  }

  componentDidMount() {
    this.$imageNode = $(ReactDOM.findDOMNode(this));

    this.$imageNode.on('inview', (event, isInView) => {
      this.$imageNode.off('inview');

      const image = new window.Image();
      image.onload = (e) => {
        // NOTE: the timeout is meant to exagerate the loading time
        window.setTimeout(() => {
          this.setState({ status: 'display' });
        }, 1000)
      };
      image.onerror = () => {
        this.setState({ status: 'error' });
      };
      image.src = this.props.src;
    });
  }

  componentWillUnmount() {
    this.$imageNode.off('inview')
  }

  render() {
    const {
      src,
      loadingSrc,
      loadingComponent,
      errorSrc,
      errorComponent,
      imageProps,
      wrapperProps,
      ...other
    } = this.props;

    const { status } = this.state;

    const displayElement = <img src={src} {...imageProps} {...other}/>;

    let loadingElement;
    if (loadingComponent) {
      loadingElement = <loadingComponent {...other}/>;
    } else if (loadingSrc) {
      loadingElement = <img src={loadingSrc} {...other}/>;
    }

    let errorElement;
    if (errorComponent) {
      errorElement = <errorComponent {...other}/>;
    } else if (errorSrc) {
      errorElement = <img src={errorSrc} {...other}/>;
    }

    return <LoaderStack
      status={status}
      displayElement={displayElement}
      loadingElement={loadingElement}
      errorElement={errorElement}
      wrapperProps={wrapperProps}
      {...other} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
  loadingComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  errorSrc: PropTypes.string,
  errorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  imageProps: PropTypes.object,
  wrapperProps: PropTypes.object,
};

export default Image;
