import React, { PropTypes } from 'react';
import _ from 'lodash';
import ParamStore from 'param-store';

const { string, array } = PropTypes;

export default class Stack extends React.Component {
  constructor (props) {
    super(props);
    this.state = {activeLayerId: ParamStore.get(props.id)[props.id]};
  }

  componentWillMount() {
    this.listener = ParamStore.listen(
      this.props.id,
      ({changedParams}) => {
        this.setState({activeLayerId: changedParams[this.props.id]});
      }
    )
  }

  componentWillUnmount() {
    ParamStore.unlisten(this.listener);
  }

  render() {
    const { id, children, defaultActiveLayerId, animations, ...other } = this.props;

    const activeLayerId = _.find([
      this.props.activeLayerId,
      this.state.activeLayerId,
      defaultActiveLayerId
    ], _.isString);

    if (!animations) {
      const activeLayer = _.find(
        children,
        (child) => child.props.id === activeLayerId
      );

      return <div {...other}>{activeLayer}</div> || null;
    }

    console.log('===== NEED TO IMPLEMENT ANIMATIONS =====');
    return (
      <div {...other}>
        {children}
      </div>
    );
  }
}

Stack.PropTypes = {
  id: string,
  children: array.isRequired,
  animations: array,
  activeLayerId: string
};
