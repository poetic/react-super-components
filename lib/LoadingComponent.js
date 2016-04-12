import React from 'react';

class LoadingComponent extends React.Component{
  constructor(props){
  super(props);
  console.log();
  }

  render() {
    return (
      <div style={{ color:'red' }}>
        LOADING COMPONENT
      </div>
    )
  }
}

export default LoadingComponent;
