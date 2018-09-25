import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

class MyComponent extends Component {

  render() {
    const { title, name, onClick } = this.props;

    return (
      <div className="MyComponent">
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div on Click={onClick}>Click me!</div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;

export default MyComponent;
