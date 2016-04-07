import React from 'react';
import { SuperImage } from 'react-super-components';


class ImageLoading extends React.Component {
  render() {
    return <div>Image LOADING Component passed in as prop</div>;
  }
}

class ImageError extends React.Component {
  render() {
    return <div>Image ERROR Component passed in as a prop</div>;
  }
}

export default (
  <div>
    <SuperImage
      src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg"
      loadingComponent={ ImageLoading}
      errorComponent={ ImageError }
      style={{}} />
  </div>
);
