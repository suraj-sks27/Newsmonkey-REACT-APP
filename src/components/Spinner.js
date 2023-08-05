import React, { Component } from 'react';
import loading from './Spinner-1.4s-201px (1).gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" width={80} />
      </div>
    );
  }
}

export default Spinner;
