import React from 'react';
import Stack from '../lib/Stack';
import { Link } from 'param-store';
import Animations from '../lib/Animations';

export default class StackDemo extends React.Component {
  fade() {
    return [
      {
        from: 'green',
        use: () => { return (Animations.fade()); },
      },
    ];
  }

  toLeft() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.toLeft()); },
      },
    ];
  }

  toRight() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.toRight()); },
      },
    ];
  }

  toUp() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.toUp()); },
      },
    ];
  }

  toDown() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.toDown()); },
      },
    ];
  }

  shiftLeft() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.shiftLeft()); },
      },
    ];
  }

  shiftRight() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.shiftRight()); },
      },
    ];
  }

  render() {
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

        <h1>animation: fade</h1>
        <ul>
          <li><Link params={{ fade: 'green' }}>green</Link></li>
          <li><Link params={{ fade: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'fade' }
          style={{ color: 'white', height: '100px' }}
          animations={this.fade()}
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: toLeft</h1>
        <ul>
          <li><Link params={{ toLeft: 'green' }}>green</Link></li>
          <li><Link params={{ toLeft: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'toLeft' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.toLeft() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: toRight</h1>
        <ul>
          <li><Link params={{ toRight: 'green' }}>green</Link></li>
          <li><Link params={{ toRight: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'toRight' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.toRight() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: toUp</h1>
        <ul>
          <li><Link params={{ toUp: 'green' }}>green</Link></li>
          <li><Link params={{ toUp: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'toUp' }
          style={{ color: 'white', height: '100px', overflow: 'hidden' }}
          animations={ this.toUp() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: toDown</h1>
        <ul>
          <li><Link params={{ toDown: 'green' }}>green</Link></li>
          <li><Link params={{ toDown: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'toDown' }
          style={{ color: 'white', height: '100px', overflow: 'hidden' }}
          animations={ this.toDown() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: shiftLeft</h1>
        <ul>
          <li><Link params={{ shiftLeft: 'green' }}>green</Link></li>
          <li><Link params={{ shiftLeft: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'shiftLeft' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.shiftLeft() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: shiftRight</h1>
        <ul>
          <li><Link params={{ shiftRight: 'green' }}>green</Link></li>
          <li><Link params={{ shiftRight: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'shiftRight' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.shiftRight() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

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
