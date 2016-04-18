import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery-inview';
import Loader from './Loader';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'LOADING' };
  }

  componentDidMount() {
    this.$imageNode = $(ReactDOM.findDOMNode(this));

    this.$imageNode.on('inview', (event, isInView) => {
      this.$imageNode.off('inview');

      const image = new window.Image();
      image.onload = (e) => {
        // NOTE: the timeout is meant to exagerate the loading time
        window.setTimeout(() => {
          this.setState({ status: 'DISPLAY' });
        }, 1000)
      };
      image.onerror = () => {
        this.setState({ status: 'ERROR' });
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
      LoadingComponent,
      errorSrc,
      ErrorComponent,
      ...other
    } = this.props;

    const { status } = this.state;

    const displayComponent = <img src={src} {...other}/>;

    let loadingComponent;
    if (LoadingComponent) {
      loadingComponent = <LoadingComponent {...other}/>;
    } else if (loadingSrc) {
      loadingComponent = <img src={loadingSrc} {...other}/>;
    }

    let errorComponent;
    if (ErrorComponent) {
      errorComponent = <ErrorComponent {...other}/>;
    } else if (errorSrc) {
      errorComponent = <img src={errorSrc} {...other}/>;
    }

    return <Loader
      status={status}
      displayComponent={displayComponent}
      loadingComponent={loadingComponent}
      errorComponent={errorComponent}
      {...other} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
  LoadingComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  errorSrc: PropTypes.string,
  ErrorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Image;
