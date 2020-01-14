json.extract! movie, :id, :title, :year, :rating, :image_url
json.photoUrl url_for(movie.image)