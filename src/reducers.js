import {SET_TAG,LOGIN,TAGS} from './actions'
import {combineReducers} from "redux/es/redux";

function Tag(state=TAGS.ALL,action) {
    switch (action.type) {
        case SET_TAG:
            return action.tag;
        default:
            return state;
    }
}

function Login(state={userId:'',token:''},action) {
    switch (action.type) {
        case LOGIN:
            return {userId:action.result.userId,token:action.result.token};
        default:
            return state;
    }
}

function Redirect(state={redirectTo:null},action) {
    switch (action.type) {
        case 'REDIRECTED':
            return {
                redirectTo: null
            };
        case LOGIN:
        case 'SIGNUP':
        case 'POST':
        case 'DELETE':
            return {
                redirectTo:'/'
            };
        default:
            return state;
    }
}

function Articles(state = {articles: [],tags:[]}, action) {
    switch (action.type) {
        case 'STORE_A':
            return {
                articles: action.articles,
                tags: action.tag,
            };
        case 'DELETE':
            const newState = Object.assign({}, state);
            for (var i = 0; i < newState.articles.length; i++) {
                if (newState.articles[i]._id === action.articleId) {
                    newState.articles.splice(i, 1);
                    break;
                }
            }
            return newState;
        default:
            return state;
    }
}

export default combineReducers(
    {Tag, Login, Redirect, Articles}
);