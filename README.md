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
<<<<<<< HEAD
 * When an error occurs, an error prop will be passed to ErrorComponent.
=======
 * When error happens, an error prop will be passed to errorComponent.
>>>>>>> master
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

<Layout component={MainLayout} id='main-layout'>
  <Stack layoutRegion='top' animations={animations} id='main' defaultActiveLayerId='users'>
    <Layer id='users' component={Users}/>
    <Layer id='cars' component={Cars}/>
  </Stack>
  <Layer layoutRegion='bottom'/>
</Layout>
```

### SuperList

```
import { SuperList } from 'react-super-components';

const listToBeRendered = ['item1', 'item2', 'item3', ...];

// using default settings

<SuperList
  rowHeight={50}
  list={ listToBeRendered }
/>

// or using rowRenderer function

<SuperList
  rowHeight={ 50 }
  list={ listToBeRendered }
  rowRenderer={ (index, list) => <div>{list[index]}</div> } // return react node
/>

```

SuperList defaults to rendering `<div>{list[index]}</div>`.

#### SuperList Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| className | String |  | CSS class name |
| list | Array | ✓ | The list you want to use. |
| rowHeight | Number or Function | ✓ | Either a fixed row height (number) or a function that returns the height of a row given its index: `(index: number) => number` |
| rowRenderer | Function |  | Responsible for rendering a row given an index. Should look like `(index: number, list: array) => React.PropTypes.node` |
| thresholdRows | Number |  | Number of rows to render above/below the visible bounds of the list. This can help reduce flickering during scrolling on certain browers/devices. |


## Testing
```
cd kitchen-sink
meteor npm install
meteor run
```
