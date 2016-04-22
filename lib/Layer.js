import React, { PropTypes } from 'react';

const { string, object, oneOfType, func, instanceOf } = PropTypes;

function Layer({ style, children }) {
  return (
    <div style={style}>
      {children}
    </div>
  );
}

Layer.PropTypes = {
  id: string.isRequired,
  component: oneOfType([func, instanceOf(React.Component)]).isRequired,
  style: object,
};

export default Layer;
