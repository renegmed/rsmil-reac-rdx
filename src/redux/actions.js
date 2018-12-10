
export function removePost(index) {
    console.log("[actions] removePost index ", index);
    return {
        type: 'REMOVE_POST',
        index,
    }    
}
 
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post,
    }
}

export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment,
    }
}