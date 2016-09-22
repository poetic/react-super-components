import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'jquery-inview';
import Stack from './Stack';
import Animations from './Animations';

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
    // image needs to be initialized twice for safari
    const image = new window.Image();
    const { src } = this.props;
   
    image.src = src;
    if (image.complete) {
      this.setState({ status: 'display' });
    } else {
      this.state = { status: 'loading' };
    }
  }

  componentDidMount() {
    this._mounted = true;

    const { lazy } = this.props;
    const imageNode = $(ReactDOM.findDOMNode(this));

    if (lazy) {
      imageNode.on('inview',() => this.addListeners(imageNode));
    } else {
      this.addListeners();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  addListeners(imageNode) {
    // image needs to be initialized twice for safari
    const image = new window.Image();

    image.onload = () => {
      if (this._mounted) {
        this.setState({ status: 'display' });
        if (imageNode) imageNode.off('inview');

        const { imageDidLoad } = this.props;
        if (imageDidLoad) imageDidLoad();
      }
    };

    image.onerror = () => {
      if (this._mounted) {
        this.setState({ status: 'error' });
      }
    };

    // used to reinitialize img source
    image.src = this.props.src;
  }

  reload() {
    this.setState({ status: 'loading' });

    this.addListeners();
  }

  createBlurURL(src) {
    const paramsToUpdate = src.substring(src.lastIndexOf("/upload/")+8,src.lastIndexOf('/'));
    const paramsToUpdateArray = paramsToUpdate.split(',');
    let blurParams = [];
    
    paramsToUpdateArray.map(param => {
      if (param.includes('h_') || param.includes('w_')) {
        const paramType = param.substring(0,2);
        const paramBlurValue = Math.round(Number(param.substring(2))) * .1;
        const newParamValue = `${paramType}${paramBlurValue}`;

        return blurParams.push(newParamValue)
      }

      return blurParams.push(param);
    });

    const originURL = src.substring(0, src.indexOf('/upload/')+8);
    const originURLEnd = src.substring(src.lastIndexOf('/'), src.length);
    const blurURL = `${originURL}e_blur:500,${blurParams}${originURLEnd}`;

    return blurURL;
  }

  render() {
    const {
      src,
      loadingSrc,
      errorFallback,
      style,
      lazy,
      imageDidLoad,
      wrapperProps,
      animation,
      blurUp,
      ...other
    } = this.props;

    const { status } = this.state;

    const loadingElement = () => {
      if (blurUp && src.indexOf('res.cloudinary.com') > -1) {

        const blurUpURL = this.createBlurURL(src);

        return <img index={'loading'} src={blurUpURL} style={style} />;
      }

      if (loadingSrc) {
        if (loadingSrc.substring(0, 1) == "#") {
          const newStyle = _.extend({}, style, { backgroundColor: loadingSrc });

          return <div index={'loading'} style={newStyle}></div>;
        }
        return <img index={'loading'} src={loadingSrc} style={style} />;
      }
      return <DefaultLoadingImg index={'loading'} style={style}/>;
    };

    const errorElement = () => {
      if (errorFallback) {
        if (errorFallback.substring(0, 1) == "#") {
          const newStyle = _.extend({}, style, { backgroundColor: errorFallback });

          return <div index={'error'} style={newStyle} onClick={() => this.reload(src)}></div>;
        }
        return <img index={'error'} src={errorFallback} style={style} onClick={() => this.reload(src)}/>;
      }
      return <ReloadImg index={'error'} style={style} onClick={() => this.reload(src)}/>;
    };

    const displayElement = <img index={'display'} src={src} style={style} {...other}/> ;

    return (
      <Stack activeLayerIndex={status} animations={ animation ? [{ from: 'loading', to: 'display', use: Animations[animation] }] : null } {...wrapperProps}>
        {loadingElement()}
        {errorElement()}
        {displayElement}
      </Stack>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
  errorFallback: PropTypes.string,
  animation: PropTypes.string,
  wrapperStyles: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  imageDidLoad: PropTypes.func,
  lazy: PropTypes.bool,
  blurUp: PropTypes.bool,
};
