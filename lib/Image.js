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
    const { loadingComponent, errorComponent, ...other } = this.props;
    const { status } = this.state;

    const displayComponent = <img {...other}/>;

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
  loadingComponent: PropTypes.object,
  errorComponent: PropTypes.object
};

export default Image;
