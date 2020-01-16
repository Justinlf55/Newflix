json.extract! movie, :id, :title, :year, :rating, :description
json.photoUrl url_for(movie.image)
json.videoUrl url_for(movie.video)
