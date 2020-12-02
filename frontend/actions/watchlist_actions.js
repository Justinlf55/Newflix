import * as WatchlistAPIUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';

export const receiveWatchlist = watchlist => ({
    type: RECEIVE_WATCHLIST,
    watchlist
});

export const fetchWatchlist = () => dispatch => (
    WatchlistAPIUtil.fetchWatchlist().then(watchlist => dispatch(receiveWatchlist(watchlist)))
)

export const addToWatchlist = movie => dispatch => (
    WatchlistAPIUtil.addToWatchlist(movie).then(addedMovie => dispatch(receiveWatchlist(addedMovie)))
)

export const removeFromWatchlist = id => dispatch => (
    WatchlistAPIUtil.removeFromWatchlist(id).then(() => dispatch(receiveWatchlist(id)))
)