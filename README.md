# Newflix

**Overview**

Newflix is a Netflix Clone allows for users to watch and stream movie trailers once registered and signed in.  The backend database is developed on PostgreSQL, the backend is developed through Ruby on Rails, and the frontend is developed using React/Redux. Cloud storage for images and videos is supported through Amazon AWS S3. 


**Technologies Implemented**

* Ruby on Rails 
* Javascript
* React.js/Redux.js 
* PostgreSQL
* Amazon AWS

**Features**

Frontend and backend user authentification. Sign up, sign in, and sign out supported through the use of session tokens and bootstrapping. 

![Sign In](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/signin.gif?raw=true)

For both creation of a user and to sign in for an existing user, a form is used to verify the input information.  Specified functions in the frontend compact data from the login or sign up forms into JSON objects, which then are sent to the backend through the proper AJAX route.  The data then triggers the corresponding backend route, through the controller, and eventually directed and saved in the User table in the PostgreSQL database.  

```
handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  setTimeout((this.props.processForm(user)),this.totalTimer);
}

```
The function above takes the data input from the form (code below), assigning the data into a JSON object, which is then passed through a the 'processForm' function dispatched to the component, eventually being saved to the database by the process explained previously.  

```

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

```
 
 
 
 
 
Genre pages are implemented and are accessed through a dropdown menu on the movies index page.  Each genre page contains only movies associated with that specified genre.  
![Demo Dropdown](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/GenreDrpDwnScreenShot.png?raw=true)
![Genre Show Page](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/GenreExampleScreenshot.png?raw=true)





A watchlist allows users to add and remove movies from their watchlist using react forms to send information to save in the backend. 

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





Movie thumbnails are hoverable and play a muted trailer once hovered over

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





When a movie thumbnail is clicked, user is redirected to show page, which plays the trailer for the clicked movie

**Future Features**



