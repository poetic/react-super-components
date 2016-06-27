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
          src="http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg"
          style={style}
          wrapperProps={wrapperProps}
          imageDidLoad={() => {console.log("imageDidLoad callback called")}}
        />

        <h2>loadingSrc</h2>
        <Image
          src="http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg"
          loadingSrc="http://www.jqueryscript.net/images/Minimal-jQuery-Loading-Overlay-Spinner-Plugin-Easy-Overlay.jpg"
          style={style}
        />

        <h2>LoadingComponent</h2>
        <Image
          src="http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg"
          LoadingComponent={(props) => <div {...props}>LOADING...</div>}
          style={style}
        />

        <h2>Error (for now error is the same as loading)</h2>
        <Image
          src="http://nonexist-image.jpg"
          style={style}
        />

        <div style={{ height: '100vh' }}></div>
        <h2>Lazy loading by default</h2>
        <Image
          src="http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg"
          style={style}
        />

      </div>
    );
  }
}
