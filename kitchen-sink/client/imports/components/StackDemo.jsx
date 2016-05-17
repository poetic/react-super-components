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

  coverLeft() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.coverLeft()); },
      },
    ];
  }

  coverRight() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.coverRight()); },
      },
    ];
  }

  coverUp() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.coverUp()); },
      },
    ];
  }

  coverDown() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.coverDown()); },
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

  flip() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.flip()); },
      },
    ];
  }

  threeDFlip() {
    return [
      {
        from: 'green',
        to: 'blue',
        use: () => { return (Animations.threeDFlip()); },
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

        <h1>animation: coverLeft</h1>
        <ul>
          <li><Link params={{ coverLeft: 'green' }}>green</Link></li>
          <li><Link params={{ coverLeft: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'coverLeft' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.coverLeft() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: coverRight</h1>
        <ul>
          <li><Link params={{ coverRight: 'green' }}>green</Link></li>
          <li><Link params={{ coverRight: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'coverRight' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.coverRight() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: coverUp</h1>
        <ul>
          <li><Link params={{ coverUp: 'green' }}>green</Link></li>
          <li><Link params={{ coverUp: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'coverUp' }
          style={{ color: 'white', height: '100px', overflow: 'hidden' }}
          animations={ this.coverUp() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: coverDown</h1>
        <ul>
          <li><Link params={{ coverDown: 'green' }}>green</Link></li>
          <li><Link params={{ coverDown: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'coverDown' }
          style={{ color: 'white', height: '100px', overflow: 'hidden' }}
          animations={ this.coverDown() }
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

        <h1>animation: flip</h1>
        <ul>
          <li><Link params={{ flip: 'green' }}>green</Link></li>
          <li><Link params={{ flip: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'flip' }
          style={{ color: 'white', height: '100px' }}
          animations={ this.flip() }
        >
          <AnimationLayer index={ 'green' } />
          <AnimationLayer index={ 'blue' } />
        </Stack>

        <h1>animation: 3dFlip</h1>
        <ul>
          <li><Link params={{ threeDFlip: 'green' }}>green</Link></li>
          <li><Link params={{ threeDFlip: 'blue' }}>blue</Link></li>
        </ul>
        <Stack
          index={ 'threeDFlip' }
          style={{ color: 'white', height: '100px', WebkitPerspective: '1000px' }}
          animations={ this.threeDFlip() }
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
    WebkitBackfaceVisibility: 'hidden',
    WebkitTransformStyle: 'preserve-3d',
  };

  return <div style={style} {...props}>{props.index}</div>;
}
