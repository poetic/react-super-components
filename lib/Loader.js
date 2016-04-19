import React from 'react';

export default (props) => {
  const {
    status,
    loadingComponent,
    errorComponent,
    displayComponent,
    ...other
  } = props;

  switch (status) {
    case 'LOADING':
      return loadingComponent || <DefaultLoadingComponent {...other} />;
    case 'ERROR':
      return errorComponent || <DefaultLoadingComponent {...other} />;
    case 'DISPLAY':
      return displayComponent;
    default:
      throw new Error('Not a valid status: ', status);
  }
}

function DefaultLoadingComponent (props) {
  // set default background color
  props.style = props.style || {};
  props.style.backgroundColor = props.style.backgroundColor || '#F8F8F8';

  return (
    <div {...props}>
      <svg version="1.1" viewBox="0 0 500 500" {...props}>
        <g>
          <polygon
            fill="#888888"
            points="199.715,282.865 223.088,258.295 231.847,262.088 259.477,232.661 270.358,245.676 275.262,242.711 301.827,282.865"/>
          <circle fill="#888888" cx="226.719" cy="229.417" r="10.21"/>
        </g>
      </svg>
    </div>
  );
}
