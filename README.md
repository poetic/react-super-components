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

### List

```
import { List } from 'react-super-components';
import ListItem from 'exampleImportedListItem.jsx';
import Header from 'exampleImportedHeader.jsx';

// Single list item component

const listToBeRendered = [
  { type: 'listItem', data: 'Ray Mysterio'},
  { type: 'listItem', data: 'Ric Flair'},
  etc.,
];
const itemType = { type: 'listItem', height: 60, class: ListItem };

<List
  data={ listToBeRendered }
  itemTypes={ itemType }
/>

// Multiple list item components

const listToBeRendered = [
  { type: 'listItem', data: 'Macho Man Randy Savage'},
  { type: 'listItem', data: 'Sting'},
  { type: 'header', data: 'Professional Wrestlers'},
  etc.,
];
const itemTypes = [
  { type: 'listItem', height: 60, class: ListItem },
  { type: 'header', height: 20, class: Header },
];

<List
  data={ listToBeRendered }
  itemTypes={ itemTypes }
/>
```

#### List Prop Types

| Property         | Type            | Required? | Description                                                                                                                                       |
| :---:            | :---:           | :---:     | :---                                                                                                                                              |
| className        | String          |           | CSS class name                                                                                                                                    |
| data             | Array           | ✓         | The data you want to use. Must be an object with a property `type` that matches a passed `type` in `itemTypes`                                    |
| itemTypes        | Object or Array | ✓         | Either an object or an array of objects with the specified properties listed below                                                                |
| itemTypes.type   | String          | ✓         | Used to match data with its corresponding itemType                                                                                                |
| itemTypes.height | Number          | ✓         | Specifies the height of the rendered React component                                                                                              |
| itemTypes.class  | Function        | ✓         | Specifies the React class that will be rendered                                                                                                   |
| thresholdRows    | Number          |           | Number of rows to render above/below the visible bounds of the list. This can help reduce flickering during scrolling on certain browers/devices  |


## Testing
```
cd kitchen-sink
meteor npm install
meteor run
```
