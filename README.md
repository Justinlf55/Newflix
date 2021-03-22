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

*Sample code for RESTful routes*

```
Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :movies, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :watchlists, only: [:index, :create, :destroy]
    resources :movie_genres, only: [:create]
  end

  root to: 'static_pages#root'
end
```

*Sample code for AJAX calls*
```
export const fetchMovies = movies => (
    $.ajax({
      method: 'GET',
      url: 'api/movies',
      movies
    })
  );

export const fetchMovie = id => (
  $.ajax({
      method: 'GET',
      url: `api/movies/${id}`
    })
  );
```

Notice how these AJAX calls take in data in the form of JSON objects. 






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

Once signed in, the user is directed to the homepage, which presents a featured video along with an index of all the trailers in the Newflix database.  

A dropdown menu allows for the user to direct themselves to a specified genre page, which contains all the videos in the database that pertain to that selected genre.  

![Demo Dropdown](https://github.com/Justinlf55/Newflix/blob/master/app/assets/images/genre.gif?raw=true)

```
    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchGenres();
    }
```

Leveraging the built-in React function, 'componentDidMount', shown above, allows for the dispatched functions 'fetchMovies' and 'fetchGenres' to call automatically after the component is loaded successfully.  These two functions make calls to the backend to retrieve all the videos from the backend as well as separated lists of these movies separated into their associated genres for use in the component.  

In the backend, RESTful routes manage the requests and distribute these requests to the proper rails controller.  

*Watchlist*

A user can add videos to their watchlist to save for later. 


``` 
    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist.user_id = current_user.id
        @watchlist.save
        render :index
    end
```



Initially, a user is created without a watchlist.  However, when the user adds their first movie, a new watchlist is created in the Watchlist Controller.  The function above shows that the new watchlist created is automatically associated with the current or signed in user.  

```
    has_one :watchlist
    has_many :watchlist_movies, 
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Watchlist
```
The movie added is then added to the watchlist by a futher association under the User model as shown above.  Inversely, that same association is destroyed when a user makes a request to delete that particular movie from their watchlist.  

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

The above code compacts a form into a button (plus icom), which is displayed on each thumbnail when hovered over.  This button then passes the particular video's id and other information to the 'handeSubmit', which then adds the video to the user's watchlist, and vice versa, in terms of deleting a video from the watchlist (minus icon). 


*Other Features*

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


The code above leverages the React 'setState' function.  The 'onMouseEnterHandler' and 'onMouseLeaveHandler' uses 'setState' to manipulate the 'hover' state of the component.  Depending on the the value of the 'hover' state, true or false, a thumbnail or a trailer is presented.  When 'hover' is true, the video thumbnail expands and a trailer plays, otherwise, only the thumbnail is displayed.  





