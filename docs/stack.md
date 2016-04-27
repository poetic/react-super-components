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

<Layout component={MainLayout} id='main-layout'>
  <Stack layoutRegion='top' animations={animations} id='main' defaultActiveLayerId='users'>
    <Layer id='users' component={Users}/>
    <Layer id='cars' component={Cars}/>
  </Stack>
  <Layer layoutRegion='bottom'/>
</Layout>
```
