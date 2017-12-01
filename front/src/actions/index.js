export const ADD_POST = 'ADD_POST'
export const GET_POST = 'GET_POST'

import * as apiPosts from '../api/posts';

export function addPost ({ owner, text }){
    return {
        type: ADD_POST,
        owner,
        text
    }
}

export function getPost ({}){

    apiPosts.selectAll().then(function(data){

        console.log("action get post here");

        return {
            type: GET_POST,
            payload: data
        }

    }).catch(function(err){
        console.log("action get post err here");

        return {
            type: GET_POST,
            payload: []
        }
    });
}
