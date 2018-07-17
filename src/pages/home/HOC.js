import React, { Component } from 'react';

export default (Original, values, validator, callbackForState) => class withSubscription extends Component {

  state = { values: { ...values } };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Data', this.state);
  }

  stateWasUpdated() {
    console.log(this.state);
    if(typeof callbackForState === 'function') callbackForState(this.state);
  }

  handleChange = key => e => {
    const value = e.target.value;
    const validate = validator(key, value);

    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [key]: value
      },

      hasError: validate.hasError,
      error: {
        ...prevState.error,
        [key]: validate.error[key]
      },

    }), this.stateWasUpdated);

    // this.setState({
    //   error: {
    //     ...prevState.error,
    //     ...validate.error
    //   }
    // })
  }

  render() {
    const { error, hasError, ...values } = this.state;
    return (
      <Original
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
        { ...this.props }
        { ...this.state }
      />
    )
  }
}