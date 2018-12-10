import posts from '../data/posts';

const postReducer = function posts(state = posts, action) {
    console.log("[reducers] posts index ", action.index);

    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)] // to remove, get the first part of array, then join the last part without the targetted element 

        case 'ADD_POST': return [...state, action.post]
        default: return state
    }
    
}

export default postReducer;