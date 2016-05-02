import React from 'react'
import Stack from '../lib/Stack';
import ParamStore from 'param-store';

export default class StackDemo extends React.Component {
  render () {
    return (
      <div>
        <h1>Stack Without animation (id: x)</h1>
        <ul>
          <li><button onClick={() => {ParamStore.set({x: 'first'})}}>first</button></li>
          <li><button onClick={() => {ParamStore.set({x: 'second'})}}>second</button></li>
          <li><button onClick={() => {ParamStore.set({x: 'third'})}}>third</button></li>
        </ul>
        <Stack id='x' defaultActiveLayerId='first' style={{backgroundColor: 'yellow'}}>
          <div id='first'>FIRST</div>
          <div id='second'>SECOND</div>
          <div id='third'>THIRD</div>
        </Stack>
      </div>
    )
  }
}
