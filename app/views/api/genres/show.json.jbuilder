json.partial! '/api/genres/genre', genre: @genre 
json.movies @genre.movies do |movie|
    json.partial! '/api/movies/movie', movie: movie
end


