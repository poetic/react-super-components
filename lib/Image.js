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

export default class Image extends React.Component {
  componentWillMount() {
    //image needs to be initialized twice for safari
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
    //image needs to be initialized twice for safari
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
        this.setState({ status: 'loading' });
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
    const paramsToUpdate = src.substring(src.lastIndexOf('/upload/')+8,src.lastIndexOf('/'));
    const paramsToUpdateArray = paramsToUpdate.split(',');
    let blurParams = [];
    
    paramsToUpdateArray.map(param => {
      if (param.includes('h_') || param.includes('w_')) {
        const paramType = param.substring(0,2);
        const paramBlurValue = Math.round(Number(param.substring(2)) * .1);
        const newParamValue = `${paramType}${paramBlurValue}`;

        return blurParams.push(newParamValue)
      }

      return blurParams.push(param);
    });

    const originURL = src.substring(0, src.indexOf('/upload/')+8);
    const originURLEnd = src.substring(src.lastIndexOf('/'), src.length);
    const blurURL = `${originURL}e_blur:750,${blurParams}${originURLEnd}`;

    return blurURL;
  }

  render() {
    const {
      src,
      loadingSrc,
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
        if (loadingSrc.substring(0, 1) == '#') {
          const newStyle = _.extend({}, style, { backgroundColor: loadingSrc });

          return <div index={'loading'} style={newStyle} onClick={() => this.reload(src)}></div>;
        }
        return <img index={'loading'} src={loadingSrc} style={style} onClick={() => this.reload(src)} />;
      }
      return <DefaultLoadingImg index={'loading'} style={style} onClick={() => this.reload(src)}/>;
    };

    const displayElement = <img index={'display'} src={src} style={style} {...other}/> ;

    return (
      <Stack activeLayerIndex={status} animations={ animation ? [{ from: 'loading', to: 'display', use: Animations[animation] }] : null } {...wrapperProps}>
        {loadingElement()}
        {displayElement}
      </Stack>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loadingSrc: PropTypes.string,
  animation: PropTypes.string,
  wrapperStyles: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  imageDidLoad: PropTypes.func,
  lazy: PropTypes.bool,
  blurUp: PropTypes.bool,
};
