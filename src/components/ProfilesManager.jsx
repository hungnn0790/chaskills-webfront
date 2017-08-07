import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Characterise from './Characterise';

export default class ProfilesManager extends PureComponent {
  render () {
    const { characterises } = this.props;
    return (
      <div>
        <div className="row text-left">
          Profiles:
        </div>
        <div className="row">
        {
          characterises
            .map((characterise, i) => {
              return (
                <Characterise {...characterise}
                  key={characterise.id}
                  i={i}
                />
              );
            })
        }
        </div>
        <hr />
      </div>
    );
  }
}