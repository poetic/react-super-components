# Stack

## Demo
https://react-super-components.herokuapp.com/stack

## API
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
  <Stack
    layoutRegion='top'
    animations={animations}
    key='main'
    defaultActiveLayerIndex='users'>
    <Users key='users' />
    <Cars key='cars' />
  </Stack>
  <Bottom layoutRegion='bottom'/>
</Layout>
```

```
deal with different senarios:
1. have reverse
2. no current layer
3. no next layer
4. a way to create new default animations
```
