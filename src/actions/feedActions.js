export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const addPost = (payload) => {
    return {type: ADD_POST, payload}
}
export const deletePost = (payload) => {
    return {type: DELETE_POST, payload}
}
export const updatePost = (payload) => {
    return {type: UPDATE_POST, payload}
}
