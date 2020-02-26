# Newflix

**Overview**

Newflix is a Netflix Clone allows for users to watch and stream movie trailers once registered and signed in.  The backend database is developed on PostgreSQL, the backend is developed through Ruby on Rails, and the frontend is developed using React/Redux. Cloud storage for images and videos is supported through Amazon AWS S3. 


**Technologies Implemented**

*Ruby on Rails 
* Javascript
* React.js/Redux.js 
* PostgreSQL
* Amazon AWS

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
![Demo Dropdown](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/GenreDrpDwnScreenShot.png?raw=true)
![Genre Show Page](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/GenreExampleScreenshot.png?raw=true)
+ A watchlist allows users to add and remove movies from their watchlist using react forms to send information to save in the backend. 
```
    handleSubmit(e) {
        e.preventDefault();
        const movie = Object.assign({}, {movie_id: this.props.movie.id});
        this.props.addToWatchlist(movie);
    }
```
```
    <form onSubmit={this.handleSubmit}>
        <input type="hidden" value={movie.id}/>
        <button className='watchlist-btn'><i className="fas fa-plus"></i></button>
    </form>
```
+ Movie thumbnails are hoverable and play a muted trailer once hovered over
```
    onMouseEnterHandler() {
        this.setState({
            hover:true,
        });

        setTimeout(() => { const video = document.getElementById('thumbnail-video');
        if (video !== null) video.play()}, 500);
    }

    onMouseLeaveHandler() {
        this.setState({
            hover:false,
        });
    }
```

```
    render() {
        const { movie } = this.props

        let display;
        if (this.state.hover) {
            display = <video 
                id='thumbnail-video' 
                className='movie-thumbnail'
                src={movie.videoUrl}
                autoPlay muted>
                </video>
        }else{
            display = <img id='thumbnail-img' 
            className='movie-thumbnail' 
            src={movie.photoUrl} alt="Space Jam"/>
        }
  ```
+ When a movie thumbnail is clicked, user is redirected to show page, which plays the trailer for the clicked movie

**Future Features**

+ Search Bar, which will allow for searching to search by movie. 
+ Improved carousel to scroll left and right when browsing on index page or genre pages

