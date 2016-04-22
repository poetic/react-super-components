import React, { PropTypes } from 'react';

const { string, object, oneOfType, func, instanceOf } = PropTypes;

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
  component: oneOfType([func, instanceOf(React.Component)]).isRequired,
  style: object,
};

export default Layer;
