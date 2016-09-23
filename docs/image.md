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
 * - loadingSrc (image src or hex color)
 * - errorFallback (image src or hex color)
 * - animation (specify animation stack animation type)
 * - imageDidLoad (function to be called when image loads)
 * - lazy (boolean - in-view lazy loading)
 * - blurUp (boolean - cloudinary URLs only - enables blur-up loading)
 *
 * Other props will be pass to the html native img commponent,
 *
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
