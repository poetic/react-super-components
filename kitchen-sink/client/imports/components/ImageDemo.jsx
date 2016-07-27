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
        width: '100%',
        height: '100%',
      },
    };

    return (
      <div>
        <h1>Image</h1>

        <h2>Default</h2>
        <Image
          src='http://www.placecage.com/c/3500/2000'
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          className="testClass"
        />

        <h2>loadingSrc</h2>
        <Image
          src='http://www.placecage.com/c/3500/2000'
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          loadingSrc="http://www.jqueryscript.net/images/Minimal-jQuery-Loading-Overlay-Spinner-Plugin-Easy-Overlay.jpg"
        />

        <h2>Error - tap to reload</h2>
        <Image
          src="http://nonexist-image.jpg"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
        />

        <h2>errorSrc - tap to reload</h2>
        <Image
          src="http://nonexist-image.jpg"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          errorSrc="https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-085_warning_attention-512.png"
        />

        <div style={{ height: '100vh' }}></div>

        <h2>Lazy loading</h2>
        <Image
          src="https://bugs.tizen.org/jira/secure/attachment/13459/1mb.png"
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
          style={style}
          wrapperProps={wrapperProps}
          lazy={true}
        />
      </div>
    );
  }
}
