import React from 'react'
import Image from '../lib/Image';

export default class ImageDemo extends React.Component {
  render () {
    const style = {
      width: '400px',
      height: '300px',
      objectFit: 'cover'
    }

    return (
      <div>
        <h1>Image</h1>

        <h2>Loading</h2>
        <Image
          src="http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg"
          style={style}
        />

        <h2>Error (for now error is the same as loading)</h2>
        <Image
          src="http://nonexist-image.jpg"
          style={style}
        />

        <div style={{height: '100vh'}}></div>
        <h2>Lazy loading by default</h2>
        <Image
          src="http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg"
          style={style}
        />

      </div>
    );
  }
}

// 1. default image for loading
// 2. pass style to rendering and error component
// ( how should error component work? )
