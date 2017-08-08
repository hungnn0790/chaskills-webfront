import React, { Component } from 'react';
import { connect } from 'react-redux';
// bindActionCreators comes handy to wrap action creators in dispatch calls
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import { ProfileManager, ChallengesManager } from '../components';
import * as characteriesActionCreators from '../actions/characterises';

class ProfileContainer extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.getCharacterises();
  }

  getCharacterises () {
    this.props.characterisesActions.getCharacterises();
  }

  render () {
    const { characterises } = this.props;
    
    return (
      <div className="container">
        <div className="col-md-4">
          <ProfileManager
            characterises={characterises}
          />
        </div>
        <div className="col-md-8">
        </div>
      </div>
    );
  }
}

// We can read values from the state thanks to mapStateToProps
function mapStateToProps (state) {
  return { // We get all the characterises to list in the page
    characterises: state.getIn(['characterises', 'list'], Immutable.List()).toJS()
  }
}

// We can dispatch actions to the reducer and sagas
function mapDispatchToProps (dispatch) {
  return {
    characterisesActions: bindActionCreators(characteriesActionCreators, dispatch)
  };
}

// Finally we export the connected ProfileContainer
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);