export const fetchGenres = genres => (
    $.ajax({
      method: 'GET',
      url: 'api/genres',
      genres
    })
);

export const fetchGenre = id => (
  $.ajax({
      method: 'GET',
      url: `api/genres/${id}`
    })
);