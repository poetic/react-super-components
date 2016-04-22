import React, { PropTypes } from 'react';
import _ from 'lodash';

const { string, array } = PropTypes;

export default class Stack extends React.Component {
  render() {
    const { id, children, animations, activeLayerId } = this.props;

    if (!animations) {
      return _.find(children, (child) => child.props.id === activeLayerId);
    }

    console.log('===== NEED TO IMPLEMENT ANIMATIONS =====');
    return (
      <div>
        {children}
      </div>
    );
  }
}

Stack.PropTypes = {
  id: string.isRequired,
  children: array.isRequired,
  animations: array,
  activeLayerId: string
};
