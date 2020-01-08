import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';



const Welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <div className='welcome-page'>
        <div className="login-signup">
            <div className='logo-div'>
              <img className='logo' src={window.logo.logo} alt="logo"/>
            </div>
            <div className='sign-in-div'>
              <Link className="signin" to="/login">Sign In</Link>
            </div>
          {/* &nbsp;or&nbsp;
          <Link to="/signup">Sign up!</Link> */}
        </div>
        <div className='welcome-message'>
          <h1>New Movies and TV Shows Every Week</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
        </div>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Welcome;