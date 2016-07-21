import React, { cloneElement, Component, PropTypes } from 'react';

class SlackLoader extends Component {
  constructor(props) {
    super(props);

    this.state = { activeComponent: 'loading' };

    this.updateActiveComponent = this.updateActiveComponent.bind(this);
  }

  updateActiveComponent(activeComponent) {
    this.setState({ activeComponent });
  }

  render() {
    const {
      props: { children },
      state: { activeComponent },
    } = this;

    const updatedChildren = children.map(child => (
      cloneElement(child, {
        isActiveClass: child.props.index === activeComponent
          ? 'active-component'
          : 'hidden-component',
        key: child.props.index,
        updateActiveComponent: this.updateActiveComponent,
      })
    ));

    return (
      <div>
          {updatedChildren}
      </div>
    );
  }
}

SlackLoader.propTypes = {
  activeComponent: PropTypes.string,
  children: PropTypes.array.isRequired,
  index: PropTypes.string.isRequired,
};

export default SlackLoader;
