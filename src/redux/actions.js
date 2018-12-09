
export function removePost(index) {
    console.log("[actions] removePost index ", index);
    return {
        type: 'REMOVE_POST',
        index: index
    }    
}
 
