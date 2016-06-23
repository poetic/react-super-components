import React from 'react';
import Stack from '../lib/Stack';
import { Link } from 'param-store';
import Animations from '../lib/Animations';

export default class StackDemo extends React.Component {
  animationDemoElement(type) {
    return (
      <div key={type}>
        <h1>animation: {type}</h1>
        <ul>
          <li><Link params={{ [type]: 'green' }}>green</Link></li>
          <li><Link params={{ [type]: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ type }
          style={{ color: 'white', height: '100px' }}
          animations={[{ from: 'green', to: 'blue', use: Animations[type] }]}
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>
      </div>
    );
  }

  render() {
    const animationTypes = [
      'crossFade',
      'toLeft',
      'toRight',
      'toUp',
      'toDown',
      'coverLeft',
      'coverRight',
      'coverUp',
      'coverDown',
      'flip',
      // 'flip3D', // this need special treatment on the stack component itself
    ];

    return (
      <div>
        <h1>Stack Without animation (index: no-animation)</h1>
        <ul>
          <li><Link params={{ 'no-animation': 'green' }}>green</Link></li>
          <li><Link params={{ 'no-animation': 'blue' }}>blue</Link></li>
          <li><Link params={{ 'no-animation': 'red' }}>red</Link></li>
        </ul>
        <Stack index={ 'no-animation' }>
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
          <AnimationLayer index={ 'red' } />
        </Stack>
        { animationTypes.map(this.animationDemoElement) }
      </div>
    );
  }
}

function AnimationLayer(props) {
  const style = {
    backgroundColor: props.index,
    width: '100vw',
    height: '100px',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '100px',
  };

  return <div style={style} {...props}>{props.index}</div>;
}
