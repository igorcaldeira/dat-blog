export const ADD_POST = 'ADD_POST'

export function addPost ({ owner, text }){
    return {
        type: ADD_POST,
        owner,
        text
    }
}