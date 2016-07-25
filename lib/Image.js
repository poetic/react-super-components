import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery-inview';
import LoaderStack from './LoaderStack';

const DefaultLoadingImg = (style) => {
  return (
      <svg version="1.1" viewBox="0 0 500 500" {...style}>
        <g>
          <polygon
            fill="#888888"
            points="199.715,282.865 223.088,258.295 231.847,262.088 259.477,232.661 270.358,245.676 275.262,242.711 301.827,282.865"/>
          <circle fill="#888888" cx="226.719" cy="229.417" r="10.21"/>
        </g>
      </svg>
  );
}

const DefaultErrorImg = (style) => {
  return (
      <svg version="1.1" id="Capa_1" viewBox="0 0 489.533 489.533" {...style}>
        <g>
          <path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
            l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
            c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
            C49.575,418.961,150.875,501.261,268.175,488.161z"/>
        </g>
      </svg>
  );
}

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'loading' };
  }

  initializeImg(){
    const { src } = this.props;
    const image = new window.Image();

    image.src = src;
    if (image.complete) {
      this.setState({ status: 'display' })
    }

    return image;
  }

  addListeners(image) {
    image.onload = (e) => {
      this.setState({ status: 'display' });

      const { imageDidLoad } = this.props;
      if (imageDidLoad) imageDidLoad();
    };

    image.onerror = () => {
      this.setState({ status: 'error' });
    }

    image.src = this.props.src;
  }

  componentWillMount() {
    this.initializeImg()
  }

  componentDidMount() {
    const image = new window.Image();

    this.addListeners(image);
  }

  reload() {
    this.setState({ status: 'loading' });

    const image = this.initializeImg();

    this.addListeners(image);
  }

  render() {
    const wrapperProps = {
      style: {
        width: '100%',
        height: '100%',
      },
    };

    const {
      src,
      loadingSrc,
      style
    } = this.props;

    const { status } = this.state;

    let displayElement =  loadingSrc ? <img src={loadingSrc} style={style}/> : <DefaultLoadingImg {...style}/>;
    let errorElement = <DefaultErrorImg {...style} onClick={() => this.reload(src)} />;

    if (status === 'display') {
      displayElement =  <img src={src} style={style}/>;
    } else if (status === 'error') {
      displayElement = errorElement;
    }

     return (
      <div style={wrapperProps}>
        {displayElement}
      </div>
    );

  }
}

export default Image;

