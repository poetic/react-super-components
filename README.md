# react super components

## API
```
import { SuperImage, SuperSubscriptions } from 'react-super-components';

const image = <Image
  src="http://brentcarnduff.com/wp-content/uploads/2014/08/url-small.jpg" />

const subscriptions = <Subscriptions
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
