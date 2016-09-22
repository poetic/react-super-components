import React from 'react';
import Image from '../lib/Image';

export default class ImageDemo extends React.Component {
  render() {
    const style = {
      width: '400px',
      height: '300px',
      objectFit: 'cover',
    };

    const wrapperProps = {
      style: {
        width: '400px',
        height: '300px',
        position: 'relative',
      },
      className: 'test-wrapper',
    };

    return (
      <div>
        <h1>Image</h1>

        <h2>Default</h2>
        <Image
          src='http://res.cloudinary.com/sagacity/image/upload/c_fill,h_1440,q_60,w_2560/oporto_vtbffq.jpg'
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          className="testClass"
          blurUp={true}
          animation="crossFade"
        />

        <h2>loadingSrc</h2>
        <Image
          src='http://www.placecage.com/c/3500/2000'
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          loadingSrc="http://www.jqueryscript.net/images/Minimal-jQuery-Loading-Overlay-Spinner-Plugin-Easy-Overlay.jpg"
        />

        <h2>errorFallback using color (hex value)</h2>
        <Image
          src="http://nonexist-image.jpg"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          errorFallback="#363636"
        />

        <h2>errorFallback using image src</h2>
        <Image
          src="http://nonexist-image.jpg"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          errorFallback="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-085_warning_attention-512.png"
        />

        <div style={{ height: '100vh' }}></div>

        <h2>Lazy loading</h2>
        <Image
          src="http://res.cloudinary.com/sagacity/image/upload/c_fill,h_1440,q_60,w_2560/IMG_3872_svszhz_e38181.jpg"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          lazy={true}
          blurUp={true}
          animation="crossFade"
        />
      </div>
    );
  }
}
