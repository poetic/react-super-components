# react super components

## Demo
https://react-super-components.herokuapp.com/

## API

### Image
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
 * NOTE: Use 'with' and 'height' in style is highly recommanded.
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

### Subscriptions
```
import { Subscriptions, permanentlySubscribe } from 'react-super-components';

<Subscriptions
  getSubscriptions={() => { return [Meteor.subscribe('cars')] }}
  displayComponent={<CarsContainer/>} />

<Subscriptions
  getSubscriptions={() => { return [permanentlySubscribe('cars')] }}
  displayComponent={<CarsContainer/>} />
```

### Stack
```
import { Stack, Layer, Layout } from 'react-super-components';

const animations = [
  {
    to: 'users',
    use: 'toLeft',
    reverse: 'toRight'
  },
  {
    to: 'cars',
    use: () => {
      return {
        currentLayer: {
          transition: '1s all',
          startStyle: {marginLeft: '0px'},
          endStyle: {marginLeft: '100%'}
        },
        nextLayer: {
          transition: '1s all',
          startStyle: {marginLeft: '100%'},
          endStyle: {marginLeft: '0px'}
        }
      }
    }
    // by default, 'reverse' is the reverse of 'use'
  }
];

const MainLayout = (props) => {
  return (
    <div style={{display: 'flex'}}>
      {this.props.top}
      {this.props.bottom}
    </div>
  )
}

<Layout component={MainLayout} key='main-layout'>
  <Stack layoutRegion='top' animations={animations} key='main'>
    <Layer key='users' component={Users}/>
    <Layer key='cars' component={Cars}/>
  </Stack>
  <Layer layoutRegion='bottom'/>
</Layout>
```

## Testing
```
cd kitchen-sink
meteor npm install
meteor run
```
