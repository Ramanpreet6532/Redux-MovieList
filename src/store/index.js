import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import movielistReducer from './reducers/movielistReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const allReducers = combineReducers({
    movies: movielistReducer,
    users: userReducer
})

// const reducer = combineReducers({ movies: movielistReducer });

const initialState = {
    users: [],
    movies: { name: "TERMINATOR SALVATION" }
};

const store = createStore(allReducers, initialState, compose(applyMiddleware(...middleware)));

export default store;

