import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Game extends PureComponent {
  render () {
    const { _id, i, name, description } = this.props;
    return (
      <div className="col-md-12">
        <div className="thumbnail">
          <div className="caption">
            <h5>{name}</h5>
            <p className="description-thumbnail">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}