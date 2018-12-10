import { combineReducers } from 'redux';
import postsData from '../data/posts';

function comments (state=[], action) {
    switch (action.type) {
        case 'ADD_COMMENT': return [...state,action.comment]; 
        default: return state;
    }        
}

function posts(state = postsData, action) {
    console.log("[reducers] posts index ", action.index);

    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)] // to remove, get the first part of array, then join the last part without the targetted element 

        case 'ADD_POST': return [...state, action.post]
        default: return state
    }
    
}
const rootReducer = combineReducers({comments, posts});

export default rootReducer;