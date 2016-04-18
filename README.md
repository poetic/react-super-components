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
 * - LoadingComponent (LoadingComponent takes precedence over loadingSrc)
 * - ErrorComponent
 *
 * Other props will be pass to LoadingComponent and ErrorComponent.
 * When error happens, an error prop will be passed to ErrorComponent.
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
