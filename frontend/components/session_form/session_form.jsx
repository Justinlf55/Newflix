import React from 'react';
import { Link } from 'react-router-dom';
 
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.totalTimer = 0;
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    setTimeout((this.props.processForm(user)),this.totalTimer);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},{
      email: 'demo@gmail.com',
      password: '123456'
    })
    this.demo(user)
  }

 
  demo(user) {
    const intervalSpeed = 75;
    const { email, password } = user;
    const demoEmailTime = email.length * intervalSpeed;
    const demoPasswordTime = password.length * intervalSpeed;
    const buffer = intervalSpeed * 2;
    const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
    this.totalTimer = demoEmailTime + demoPasswordTime;
    this.demoEmail(email, intervalSpeed);
    setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
    setTimeout(() => this.props.processForm(user), totalDemoTime)
  }

  demoEmail(email, intervalSpeed) {
    let i = 0;
    setInterval(() => {
      if (i <= email.length) {
        this.setState({ email: email.slice(0, i) })
        i++
      } else {
        clearInterval()
      }
    }, intervalSpeed);
  }

  demoPassword(password, intervalSpeed) {
    let j = 0;
    setInterval(() => {
      if (j <= password.length) {
        this.setState({ password: password.slice(0, j) })
        j++
      } else {
        clearInterval();
      }
    }, intervalSpeed);
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
    const display = this.props.formType === 'Sign Up' ? '' 
    : <p>New to Newflix? <Link className='signup-link' to='/signup'>Sign Up Now</Link></p>
    
    return (
      <div className="login-box tint-page">
        <img className='welcome-background' src={window.images.welcome} alt=""/>
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
                value={this.state.email}
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
                value={this.state.password}
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
            {display}
        </form>
      </div>
    );
  }
}

export default SessionForm;