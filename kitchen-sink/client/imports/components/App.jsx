import React from 'react';
import { SuperImage } from 'react-super-components';

const ImageLoading = () => (
  <div className="LOADING">Loading component test</div>
);

const ImageError = () => (
  <div className="ERROR">Error component test</div>
);

export default class App extends React.Component {
  render() {
    return (
      <SuperImage
        src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg"
        loadingComponent={<ImageLoading />}
        errorComponent={<ImageError />}
        style={{}}
      />
    );
  }
}

