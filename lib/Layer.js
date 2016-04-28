import React, { PropTypes } from 'react';

const { string, object, func } = PropTypes;

function Layer({ style, component }) {
  const Component = component;
  return (
    <div style={style}>
      <Component/>
    </div>
  );
}

Layer.PropTypes = {
  id: string.isRequired,
  component: func.isRequired,
  style: object,
};

export default Layer;
