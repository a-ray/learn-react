import React, { Component } from 'react';

class MyComponent extends Component {

  render() {
    const { title, name, onClick } = this.props;

    return (
      <div className="MyComponent">
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click me!</div>
      </div>
    );
  }
}

export default MyComponent;
