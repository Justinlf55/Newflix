import React from 'react';
import { Link } from 'react-router-dom';
 
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handeDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = { email: 'user2@gmail.com', password: '123456'};
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-box tint-page">
        <img class='welcome-background' src={window.images.welcome} alt=""/>
        <div className="logo-div">
          <Link to="/">
            <img className='logo' src={window.images.logo} alt="logo"/>
          </Link>
        </div>
        <form onSubmit={this.handleSubmit} className='signin-form-container'>
          <br/>
          <h1 className='session-form-title'>{this.props.formType}</h1>
          <div className="login-form">
            <label>
              <input 
                type="text"
                placeholder='Email'
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>
            <div className='session-errors-div'>
              <h5 className='session-errors'>{this.renderErrors()}</h5>
            </div>
            <label>
              <input 
                type="password"
                placeholder='Password'
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br/>
            <input 
              className="session-submit" 
              type="submit" 
              value={this.props.formType} 
              />
            <input 
              className="demo-submit" 
              type="submit" 
              value='Demo Sign In' 
              onClick={this.handleDemoSubmit}
              />
            <br/>
            <label>Remember Me</label>
              <input type="radio" name="radio" id="radio1"></input>
          </div>
          <br/>
          <p>New to Newflix?</p>
          <Link className='signup-link' to='/signup'>Sign Up Now</Link>
        </form>
      </div>
    );
  }
}

export default SessionForm;