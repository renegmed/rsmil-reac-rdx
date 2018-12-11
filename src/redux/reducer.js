import { combineReducers } from 'redux';


function comments (state={}, action) {
    switch (action.type) {
        case 'ADD_COMMENT': 
            console.log("[reducer] action postId",action.postId);
            if (!state[action.postId]) {
                return {...state, [action.postId]: [action.comment] }  // [action.postId] is the name of element, [action.comment] is an array 
            } else {
                return {...state, [action.postId]:  [...state[action.postId], action.comment] } // [action.postId] is the name of element, [action.comment] is an array 
            }
           
        default: return state;
    }        
}

function posts(state = [], action) {
    //console.log("[reducers] posts index ", action.index);

    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)] // to remove, get the first part of array, then join the last part without the targetted element 

        case 'ADD_POST': return [...state, action.post]

        case 'LOAD_POSTS':
            return action.posts;

        default: return state
    }
    
}
const rootReducer = combineReducers({comments, posts});

export default rootReducer;