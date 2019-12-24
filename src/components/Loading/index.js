import React, {Component} from 'react';
import {Spinner} from 'reactstrap';

export default class Loading extends Component {
  render() {
    return (
      <div className="container">
        <Spinner color="primary" className="spinner"/>
      </div>
    );
  }
}