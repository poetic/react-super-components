import React from 'react';
import Stack from './Stack';

export default (props) => {
  const {
    status,
    loadingElement,
    errorElement,
    displayElement,
    wrapperProps,
    ...other
  } = props;
  const _loadingElement = loadingElement
    ? React.cloneElement(loadingElement, {index: 'loading'})
    : <DefaultLoadingComponent index='loading' {...other} />;

  const _errorElement = errorElement
    ? React.cloneElement(errorElement, {index: 'error'})
    : <DefaultLoadingComponent index='error' {...other} />;

  const _displayElement = React.cloneElement(displayElement, {index: 'display'});

  return (
    <Stack activeLayerIndex={status} {...wrapperProps} >
      {_loadingElement}
      {_errorElement}
      {_displayElement}
    </Stack>
  );
}

function DefaultLoadingComponent (props) {
  // set default background color
  const mergedProps = Object.assign({}, props)
  mergedProps.style = Object.assign(
    {backgroundColor: '#F8F8F8'},
    mergedProps.style
  )

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
