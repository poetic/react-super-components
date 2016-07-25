import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery.appear';
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
    <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" {...style}>
        <g id="Other-pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="reload" fill="#757575">
                <path d="M27.8856005,7.77506185 C39.1095302,7.77506185 48.2330754,16.7585479 48.5057215,27.9475303 L54.710944,27.9475303 L45.4258308,38.2936799 L36.1407175,27.9475303 L43.3506913,27.9475303 C43.0780452,19.6150946 36.2618935,12.9481367 27.8856005,12.9481367 C19.3376414,12.9481367 12.4104117,19.8926742 12.4104117,28.4673612 C12.4104117,37.0370013 19.3376414,43.9865857 27.8856005,43.9865857 C31.3138723,43.9865857 34.4795961,42.8661734 37.0444887,40.973585 L40.5939366,44.7688556 C37.0899297,47.5194173 32.6771027,49.1596605 27.8856005,49.1596605 C16.4900047,49.1596605 7.25033246,39.893548 7.25033246,28.4673612 C7.25033246,17.0361275 16.4900047,7.77506185 27.8856005,7.77506185" id="Fill-65" transform="translate(30.980638, 28.467361) rotate(-47.000000) translate(-30.980638, -28.467361) "></path>
            </g>
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

    const { lazy, offset } = this.props;

    if (lazy) {
      const imageNode = $(ReactDOM.findDOMNode(this));
      imageNode.appear(() => {
        imageNode.off('inview');
        this.addListeners(image);
      },{accX: 0, accY: offset ? offset : 0});
    } else {
      this.addListeners(image);
    }
  }

  reload() {
    this.setState({ status: 'loading' });

    const image = this.initializeImg();

    this.addListeners(image);
  }

  render() {
    const {
      src,
      loadingSrc,
      style,
      ...other
    } = this.props;

    const { status } = this.state;

    let displayElement = loadingSrc ? <img src={loadingSrc} style={style} /> : <DefaultLoadingImg style={style}/>;
    let errorElement = <DefaultErrorImg style={style} onClick={() => this.reload(src)} />;

    if (status === 'display') {
      displayElement =  <img src={src} style={style} {...other}/>;
    } else if (status === 'error') {
      displayElement = errorElement;
    }

     return (
      <div style={{ height: '100%', width: '100%' }}>
        {displayElement}
      </div>
    );

  }
}

export default Image;

