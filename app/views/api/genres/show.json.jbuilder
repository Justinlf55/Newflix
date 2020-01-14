json.partial! '/api/genres/genre', genre: @genre 
json.movies @genre.movies
