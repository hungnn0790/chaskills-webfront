import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { ProfileContainer } from '../containers';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="container">
        <div className="col-md-4">
          <ProfileContainer />
        </div>
        <div className="col-md-8">
        </div>
      </div>
    );
  }
}