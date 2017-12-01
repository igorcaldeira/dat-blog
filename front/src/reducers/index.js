import {
    ADD_POST,
    GET_POST
} from '../actions'


const initialPostState = {
    posts: []
}

function posts(state = initialPostState, action){
    const {owner, text} = action

    switch(action.type){
        case ADD_POST :

            var newPosts = state.posts.push({
                owner, text,
            });

            return {
                ...state,
                newPosts
            }
        case GET_POST :

            return {
                ...state,
                posts: action.payload
            }
        default :
            break;
    }
}

export default posts;
