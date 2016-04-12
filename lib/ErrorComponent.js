import React from 'react';

class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  render() {
    return (
      <div>
        An Error has occured:
        {this.props.error.message}
      </div>
    );
  }
}
ErrorComponent.propTypes = {
  error: React.PropTypes.object,
};
export default ErrorComponent;
