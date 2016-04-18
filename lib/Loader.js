import React from 'react';

export default (props) => {
  const {
    status,
    loadingComponent,
    errorComponent,
    displayComponent,
    style
  } = this.props;

  switch (status) {
    case 'LOADING':
      return loadingComponent || <LoadingComponent {...other} />;
    case 'ERROR':
      return errorComponent || <ErrorComponent {...other} />;
    case 'DISPLAY':
      return displayComponent;
    default:
      throw new Error('Not a valid status: ', status);
  }
}

function LoadingComponent (props) {
  return <div {...props}>Loading...</div>;
}

function ErrorComponent (props) {
  return <div {...props}>Error...</div>;
}
