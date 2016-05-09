import React from 'react'
import Stack from '../lib/Stack';
import ParamStore, {Link} from 'param-store';

export default class StackDemo extends React.Component {
  slideUp () {
    return [
      {
        from: 'green',
        use: () => {
          return {
            nextLayer: {
              transition: '1s transform',
              startStyle: {transform: 'translateY(100%)', zIndex: 1},
              endStyle: {transform: 'translateY(0)', zIndex: 1}
            }
          }
        }
      }
    ]
  }

  render () {
    return (
      <div>
        <h1>Stack Without animation (index: no-animation)</h1>
        <ul>
          <li><Link params={{'no-animation': 'green'}}>green</Link></li>
          <li><Link params={{'no-animation': 'blue'}}>blue</Link></li>
          <li><Link params={{'no-animation': 'red'}}>red</Link></li>
        </ul>
        <Stack index='no-animation'>
          <AnimationLayer index='green' />
          <AnimationLayer index='blue' />
          <AnimationLayer index='red' />
        </Stack>

        <h1>animation: slide up</h1>
        <ul>
          <li><Link params={{'slide-up': 'green'}}>green</Link></li>
          <li><Link params={{'slide-up': 'blue'}}>blue</Link></li>
        </ul>
        <Stack
          index='slide-up'
          style={{color: 'white'}}
          animations={this.slideUp()} >
          <AnimationLayer index='green' />
          <AnimationLayer index='blue' />
        </Stack>
      </div>
    )
  }
}

function AnimationLayer (props) {
  const style = {
    backgroundColor: props.index,
    width: '100vw',
    height: '100px',
    color: 'white',
    fontSize: '20px',
    textAlign: 'center',
    lineHeight: '100px'
  };

  return <div style={style} {...props}>{props.index}</div>;
}
