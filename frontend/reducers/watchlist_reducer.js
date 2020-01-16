import { RECEIVE_WATCHLIST } from '../actions/watchlist_actions';

const watchlistReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_WATCHLIST:
            debugger
            return action.watchlist;
        default:
            return state;
    }
}

export default watchlistReducer;