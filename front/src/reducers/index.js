import {
    ADD_POST
} from '../actions'

const initialPostState = {
    posts: []
}

function posts(state = initialPostState, action){
    const {owner, text} = action

    switch(action.type){
        case ADD_POST :

            var newState = state;

            newState.posts.push({
                owner, text,
            });

            return newState
        default :
            console.log("default")
    }
}

export default posts;
