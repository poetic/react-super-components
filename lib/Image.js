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

  componentWillMount() {
    const { src } = this.props;
    const image = new window.Image();
    image.src = src;
    if (image.complete) {
      this.setState({ status: 'display' })
    }
  }

  componentDidMount() {
    const { status } = this.state;
    if (status === 'display') {
      const { imageDidLoad } = this.props;
      if (imageDidLoad) imageDidLoad();
      return;
    }
    this.$imageNode = $(ReactDOM.findDOMNode(this));
    this.$imageNode.on('inview', (event, isInView) => {
      this.$imageNode.off('inview');

      const image = new window.Image();
      image.onload = (e) => {
        this.setState({ status: 'display' });
        const { imageDidLoad } = this.props;
        if (imageDidLoad) imageDidLoad();
      };
      image.onerror = () => {
        this.setState({ status: 'error' });
        const { imageDidLoad } = this.props;
        if (imageDidLoad) imageDidLoad(Error('image failed to load'));
      };
    
      image.src = this.props.src;
    });
  }

  componentWillUnmount() {
    if (this.$imageNode) this.$imageNode.off('inview');
  }

  render() {
    const {
      src,
      loadingSrc,
      loadingComponent,
      errorSrc,
      errorComponent,
      wrapperProps,
      ...other
    } = this.props;

    const { status } = this.state;

    const displayElement = <img src={src} {...other}/>;

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
  wrapperProps: PropTypes.object,
  imageDidLoad: PropTypes.func,
};

export default Image;

