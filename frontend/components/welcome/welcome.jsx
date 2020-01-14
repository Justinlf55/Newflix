import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';



const Welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <img className='welcome-background' src={window.images.welcome} alt=""/>
      <div className='tint-page'>
        <div className="login-signup">
            <div className='logo-div'>
              <Link to="/">
                <img className='logo' src={window.images.logo} alt="logo"/>
              </Link>
            </div>
            <div className='sign-in-div'>
              <Link className="signin" to="/login">Sign In</Link>
            </div>
        </div>
        <br/>
        <div className='welcome-message'>
          <div className='inner-welcome-div'>
            <h1>New Movies and TV Shows Every Week</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <Link className="signup" to="/signup">TRY 30 DAYS FREE</Link>
            {/* <h5>Ready to watch? Enter your email to create or access your account Email address</h5> */}
          </div>
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