import React, { PropTypes } from 'react';

const { string, object, func } = PropTypes;

function Layer({ style, component, componentProps }) {
  const Component = component;
  return (
    <div style={style}>
      <Component {...componentProps} />
    </div>
  );
}

Layer.PropTypes = {
  id: string.isRequired,
  style: object,
  component: func.isRequired,
  componentProps: object
};

export default Layer;
