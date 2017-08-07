import React, { Component } from 'react';
import { ProfilesManager, ChallengesManager } from '../components';

export default class HomeContainer extends Component {
  constructor (props) {
    super(props);

    // The initial state
    this.state = { characterises: [] };
  }

  // Once the component mounted it fetches the data from the server
  componentDidMount () {
    this.getGames();
  }

  getGames () {
    fetch('http://localhost:8765/api/characterises', {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json()) // The json response to object literal
    .then(data => this.setState({ characterises: data }));
  }

  render () {
    const { characterises } = this.state;
    return (
      <div>
        <div className="col-md-4">
          <ProfilesManager
            characterises={characterises}
          />
        </div>
        <div className="col-md-8">
        </div>
      </div>
    );
  }
}