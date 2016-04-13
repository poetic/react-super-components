import React from 'react';
import { SuperImage } from '../lib/index';

const ImageComponentLoading = () => (
  <div className="LOADING">Currently Loading...</div>
);

const ImageComponentError = () => (
  <div className="ERROR">There was an error</div>
);

export default class App extends React.Component {
  render() {
    return (
      <SuperImage
        src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg"
        style={{}}
        loadingComponent={ <ImageComponentLoading /> }
        errorComponent={ <ImageComponentError /> }
      />
    );
  }
}

