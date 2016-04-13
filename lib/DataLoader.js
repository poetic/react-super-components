import React from 'react';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';

class DataLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderState: 'loading',
      error: null,
    };
    console.log();
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
    return subscriptions.every((sub) => {
      return sub.ready();
    });
  }

  render() {
    if (this.state.renderState === 'loading') {
      return (
        <div>
        {
          this.props.loadingComponent ?
          this.props.loadingComponent :
          <LoadingComponent />
        }
        </div>
      );
    }

    if (this.state.renderState === 'error') {
      return (
        <div>
          {
            this.props.errorComponent ?
            React.cloneElement(this.props.errorComponent, { error: this.state.error }) :
            <ErrorComponent error={this.state.error} />
          }
        </div>
      );
    }

    return (
      <div>
        {this.props.viewComponent}
      </div>
    );
  }
}

DataLoader.propTypes = {
  subscriptionsArguments: React.PropTypes.array,
  loadingComponent: React.PropTypes.element,
  errorComponent: React.PropTypes.element,
  viewComponent: React.PropTypes.element,
};
export default DataLoader;
