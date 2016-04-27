# Image

## Demo
https://react-super-components.herokuapp.com/image

## API
```
/**
 * Image component is a wrapper for <img/> with lazy loading and error
 * handling support.
 *
 * Props:
 * - src (required)
 * - loadingSrc
 * - loadingComponent (loadingComponent takes precedence over loadingSrc)
 * - errorSrc
 * - errorComponent (errorComponent takes precedence over errorSrc)
 *
 * Other props will be pass to the html native img commponent,
 * loadingComponent and errorComponent.
 *
 * When error happens, an error prop will be passed to errorComponent.
 *
 * NOTE: Using 'width' and 'height' in style is highly recommanded.
 */

import { Image } from 'react-super-components';

<Image
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

<Image
  loadingSrc="/local-image.jpg"
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

<Image
  loadingComponent={MyLoadingComponent}
  errorComponent={MyErrorComponent}
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />
```
