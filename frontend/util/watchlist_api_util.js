export const fetchWatchlist = watchlist => (
  $.ajax({
      method: 'GET',
      url: 'api/watchlists/',
      watchlist
    })
);