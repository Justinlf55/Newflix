# Newflix

**Overview**

Newflix is a Netflix Clone allows for users to watch and stream movie trailers once registered and signed in.  The backend database is developed on PostgreSQL, the backend is developed through Ruby on Rails, and the frontend is developed using React/Redux. Cloud storage for images and videos is supported through Amazon AWS S3. 


**Technologies Implemented**

* Ruby on Rails 
* Javascript
* React.js/Redux.js 
* PostgreSQL
* Amazon AWS

**Concepts Implemented**

* RESTful Routes/API
* Object Oriented Porgramming

**Interface and Routing**

A friendly User Interface allows for users to navigate the applications and make requests to the backend.  Through AJAX calls, requests to the backend can be made asynchronously.  These requests are processed through the corresponding RESTful route in the backend.  Another key conecpt implemented, is the Objected Oriented Programming, which allows for efficient and organized movement and storage of data throughout the application by compacting all data into JSON objects. 

**Features**

*User Authorization*

Frontend and backend user authentification. Sign up, sign in, and sign out supported through the use of session tokens and bootstrapping. 

![Sign In](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/signin.gif?raw=true)

For both creation of a user and to sign in for an existing user, a form is used to verify the input information.  Specified functions in the frontend compact data from the login or sign up forms into JSON objects, passed through the Redux.JS cycle (action functions, reducers, etc), then are sent to the backend through the proper AJAX route after .  The data then triggers the corresponding backend route, through the controller, and eventually is directed and saved in the User table in the PostgreSQL database.  

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

The HTML code above, is the form implemented in the render function on the React component, which handles the sign up and sign in process.  Here, the built in 'onClick' function is used to call the 'handleSubmit' function with the data input into the form.  
 
```
    def create
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 401
      end
    end

```

The Ruby code above is from the backend Users Controller, which creates a new user in the database as long as the proper paramaters are met, if not an error is sent back to the frontend as a JSON object and displayed to the user, so data can be corrected.  A user is automatically signed in with a new session token as a new session is created once sign up is successful.  Signing in an existing user works in a similar way, except instead of creating a new user, the function searches for an existing user with matching credentials to sign in.  After, user is found, the new session is created and a new session token is assigned.  Logging out a user, or ending a session, destroys the user's current session token, which ends the current session and redirects back to the login page.  
 
*Homepage and Genre Pages*

Genre pages are implemented and are accessed through a dropdown menu on the movies index page.  Each genre page contains only movies associated with that specified genre.  
![Demo Dropdown](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/GenreDrpDwnScreenShot.png?raw=true)
![Genre Show Page](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/GenreExampleScreenshot.png?raw=true)



*Watchlist*

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





