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
run kitchen-sink
meteor run
// another shell
npm run watch
```

## TODO
- setup a heroku demo page
- image show error state
