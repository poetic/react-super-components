# react super components

## Demo
https://react-super-components.herokuapp.com/

## API

### Image
```
/**
 * Props:
 * - src (required)
 * - loadingSrc
 * - LoadingComponent (LoadingComponent take precedence over loadingSrc)
 * - ErrorComponent
 */

import { Image } from 'react-super-components';

<Image
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

<Image
  loadingSrc="/local-image.jpg"
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

<Image
  LoadingComponent={MyLoadingComponent}
  ErrorComponent={MyErrorComponent}
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />
```

### Subscriptions
```
import { Subscriptions } from 'react-super-components';

<Subscriptions
  subscriptions={[Meteor.subscribe('users')]} />
```

## Testing
```
cd kitchen-sink
meteor run
```

## TODO
- setup a heroku demo page
- image show error state

- Image component research
  - https://github.com/jasonslyvia/react-lazyload
  - https://github.com/loktar00/react-lazy-load
