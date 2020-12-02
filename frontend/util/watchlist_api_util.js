export const fetchWatchlist = watchlist => (
  $.ajax({
      method: 'GET',
      url: 'api/watchlists/',
      watchlist
    })
);

export const addToWatchlist = movie => (
  $.ajax({
    method: 'POST',
    url: '/api/watchlists',
    data: { movie }
  })
);

export const removeFromWatchlist = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/watchlists/${id}`,
  })
)