import React from 'react'
import Stack from '../lib/Stack';
import ParamStore, {Link} from 'param-store';

export default class StackDemo extends React.Component {
  render () {
    return (
      <div>
        <h1>Stack Without animation (index: no-animation)</h1>
        <ul>
          <li><Link params={{'no-animation': 'first'}}>first</Link></li>
          <li><Link params={{'no-animation': 'second'}}>second</Link></li>
          <li><Link params={{'no-animation': 'third'}}>third</Link></li>
        </ul>
        <Stack index='no-animation'
          defaultActiveLayerIndex='first'
          style={{backgroundColor: 'yellow'}}>
          <div index='first'>FIRST</div>
          <div index='second'>SECOND</div>
          <div index='third'>THIRD</div>
        </Stack>

        <h1>Stack with opacity animation (index: animation)</h1>
        <ul>
          <li><Link params={{'animation': 'first'}}>first</Link></li>
          <li><Link params={{'animation': 'second'}}>second</Link></li>
          <li><Link params={{'animation': 'third'}}>third</Link></li>
        </ul>
        <Stack
          index='animation'
          style={{color: 'white'}}
          defaultActiveLayerIndex='first'>
          <div index='first' style={{backgroundColor: 'blue'}}>FIRST</div>
          <div index='second' style={{backgroundColor: 'green'}}>SECOND</div>
          <div index='third' style={{backgroundColor: 'red'}}>THIRD</div>
        </Stack>
      </div>
    )
  }
}
