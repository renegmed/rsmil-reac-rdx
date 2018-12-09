import posts from '../data/posts';

const postReducer = function posts(current_state = posts, action) {
    console.log("[reducers] posts index ", action.index);
    return current_state;

}

export default postReducer;