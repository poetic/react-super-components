import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {} from 'jquery-inview';

export default class SuperImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { status: 'NOT_IN_VIEW' };
  }

  componentDidMount() {
    this.isInView();
  }

  isInView() {
    const node = ReactDOM.findDOMNode(this);

    $(node).on('inview', (event, isInView) => {
      $(node).off('inview');
      this.setState({ isInView });

      const image = new window.Image();
      image.src = this.props.src;
      image.onload = () => { this.setState({status: 'SHOW'}); };
      image.onerror = () => { this.setState({status: 'ERROR'}); };
    });
  }

  render() {
    const { src, style, loadingComponent, errorComponent } = this.props;
    const { status } = this.state;

    const LoadingComponent = loadingComponent;
    const ErrorComponent = errorComponent;

    switch (status) {
      case 'NOT_IN_VIEW':
      return <LoadingComponent /> || <ImageLoading/>;
      case 'ERROR':
        return <ErrorComponent /> || <ImageError/>;
      case 'SHOW':
        return <img style={ style } src={ src } />;
      default:
        throw new Error('not a valid status: ', status);
    }
  }
}

SuperImage.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  loadingComponent: PropTypes.function,
  errorComponent: PropTypes.function,
};

class ImageLoading extends React.Component {
  render() {
    return <div>Loading...</div>;
  }
}

class ImageError extends React.Component {
  render() {
    return <div>Error...</div>;
  }
}

export default SuperImage;
