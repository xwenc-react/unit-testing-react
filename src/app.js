// @flow
import React from 'react';
import { Component } from 'react';

type Props = {
  name:?string,
};

export default class App extends Component<Props> {
  static defaultProps = {
    name: "default", // ...but we have a default prop for foo.
  };
  render() {
    return (
     <div>
        <h1>Hello World!!! {this.props.name}</h1>
      </div>
      );
  }
}