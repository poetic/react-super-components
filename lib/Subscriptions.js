import React from 'react';

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderState: 'loading',
      error: null,
    };
  }

  componentWillMount() {
    const subscriptions = this.createSubscriptions();

    Tracker.autorun(() => {
      const subsReady = this.checkSubscriptions(subscriptions);
      this.setState({ renderState: subsReady ? 'render' : 'loading' });
    });
  }

  createSubscriptions() {
    const subsArgs = _.clone(this.props.subscriptionsArguments);
    const subscriptions = [];

    subsArgs.forEach((args) => {
      args.push({
        onStop: (error) => {
          this.setState({ renderState: 'error', error });
        },
      });
      subscriptions.push(Meteor.subscribe.apply(Meteor, args));
    });

    return subscriptions;
  }

  checkSubscriptions(subscriptions) {
    return subscriptions.every((sub) => sub.ready());
  }

  render() {
    switch (status) {
      case 'LOADING':
        return this.props.loadingComponent || <div>LOADING</div> ;
      case 'ERROR':
        return this.props.errorComponent
          ? React.cloneElement(this.props.errorComponent, { error: this.state.error })
          : <div>Error</div>;
      case 'SHOW':
        return this.props.viewComponent
      default:
        throw new Error('not a valid status: ', status);
    }
  }
}

Subscriptions.propTypes = {
  subscriptionsArguments: React.PropTypes.array,
  loadingComponent: React.PropTypes.element,
  errorComponent: React.PropTypes.element,
  viewComponent: React.PropTypes.element,
};

export default Subscriptions;
