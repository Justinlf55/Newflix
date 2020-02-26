# README

**Technologies Implemented**
Ruby on Rails, Javascript, React.js/Redux.js, PostgreSQL, Amazon AWS

**Overview**

Newflix is a Netflix Clone allows for users to watch and stream movie trailers once registered and signed in.  The backend database is developed on PostgreSQL, the backend is developed through Ruby on Rails, and the frontend is developed using React/Redux. Cloud storage for images and videos is supported through Amazon AWS S3. 

**Features**

+ Frontend and backend user authentification. Sign up, sign in, and sign out supported through the use of session tokens and bootstrapping. 
![Sign In](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/Screen%20Shot%202020-02-24%20at%201.33.39%20AM.png?raw=true)
+ There is a demo sign in feature if a user does not have time to sign up. 
```
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
 ```
+ Genre pages are implemented and are accessed through a dropdown menu on the movies index page.  Each genre page contains only movies associated with that specified genre.  
+ A watchlist allows users to add and remove movies from their watchlist using react forms to send information to save in the backend. 
+ Movie thumbnails are hoverable and play a muted trailer once hovered over
+ When a movie thumbnail is clicked, user is redirected to show page, which plays the trailer for the clicked movie

**Future Features**

+ Search Bar, which will allow for searching through movies character by character. 
+ Improved designs and stylings

