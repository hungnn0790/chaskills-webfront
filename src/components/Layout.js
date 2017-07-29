import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            Chaskills
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Chaskills - A tool for Life-long learner.
          </p>
        </footer>
      </div>
    );
  }
}