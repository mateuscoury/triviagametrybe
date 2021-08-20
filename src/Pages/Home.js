import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div id='formContainer'>
        <Login props={this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Home;
