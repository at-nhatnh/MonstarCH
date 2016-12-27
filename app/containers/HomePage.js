// @flow
import React, { Component } from 'react';
import Naviga from '../components/Nav';

export default class HomePage extends Component {
  render() {
    return (
      <div className="wrap_hp">
      <Naviga />
      <h1> Welcome my Demo</h1>
      </div>
    );
  }
}
