import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery.appear';
import Stack from './Stack';

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
};

const ReloadImg = (style) => {
  return (
    <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" {...style}>
        <g id="Other-pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="reload" fill="#888888">
                <path d="M27.8856005,7.77506185 C39.1095302,7.77506185 48.2330754,16.7585479 48.5057215,27.9475303 L54.710944,27.9475303 L45.4258308,38.2936799 L36.1407175,27.9475303 L43.3506913,27.9475303 C43.0780452,19.6150946 36.2618935,12.9481367 27.8856005,12.9481367 C19.3376414,12.9481367 12.4104117,19.8926742 12.4104117,28.4673612 C12.4104117,37.0370013 19.3376414,43.9865857 27.8856005,43.9865857 C31.3138723,43.9865857 34.4795961,42.8661734 37.0444887,40.973585 L40.5939366,44.7688556 C37.0899297,47.5194173 32.6771027,49.1596605 27.8856005,49.1596605 C16.4900047,49.1596605 7.25033246,39.893548 7.25033246,28.4673612 C7.25033246,17.0361275 16.4900047,7.77506185 27.8856005,7.77506185" id="Fill-65" transform="translate(30.980638, 28.467361) rotate(-47.000000) translate(-30.980638, -28.467361) "></path>
            </g>
        </g>
    </svg>
  );
};

export default class Image extends React.Component {

  componentWillMount() {
    const { src } = this.props;
    const image = new window.Image();

    image.src = src;
    if (image.complete) {
      this.setState({ status: 'display' });
    } else {
      this.state = { status: 'loading' };
    }

    this.image = image;
  }

  componentDidMount() {
    const { lazy, offset=0 } = this.props;

    if (lazy) {
      const imageNode = $(ReactDOM.findDOMNode(this));
      imageNode.appear(
        () => this.addListeners(),
        { accX: 0, accY: offset }
      );
    } else {
      this.addListeners();
    }
  }

  addListeners() {
    this.image.onload = () => {
      this.setState({ status: 'display' });

      const { imageDidLoad } = this.props;
      if (imageDidLoad) imageDidLoad();
    };

    this.image.onerror = () => {
      this.setState({ status: 'error' });
    };

    // used to reinitialize img source
    this.image.src = this.props.src;
  }

  reload() {
    this.setState({ status: 'loading' });

    this.addListeners();
  }

  render() {
    const {
      src,
      loadingSrc,
      style,
      lazy,
      offset,
      imageDidLoad,
      wrapperStyles,
      ...other
    } = this.props;

    const { status } = this.state;

    const loadingElement = () => {
      if (loadingSrc) {
        return <img index={'loading'} src={loadingSrc} style={style} />;
      }
      return <DefaultLoadingImg index={'loading'} style={style}/>;
    };

    const displayElement = <img index={'display'} src={src} style={style} {...other}/> ;
    const errorElement = <ReloadImg index={'error'} style={style} onClick={() => this.reload(src)} />;

    return (
      <Stack activeLayerIndex={status} style={wrapperStyles}>
        {loadingElement()}
        {errorElement}
        {displayElement}
      </Stack>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
  wrapperStyles: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  imageDidLoad: PropTypes.func,
  lazy: PropTypes.boolean,
  offset: PropTypes.number,
};

export default Image;
