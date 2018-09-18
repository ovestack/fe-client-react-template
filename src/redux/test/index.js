import {
    ACTIONS
} from './action'

function articles(state = {
    articles: [],
    fetching: false
}, action) {
    switch (action.type) {
        case ACTIONS.LOADING:
            return Object.assign({}, state, {
                fetching: true
            })
        case ACTIONS.GET:
            return Object.assign({}, state, {
                fetching: false,
                articles: action.articles
            })
        default:
            return state
    }
}

export default {
    'test/articles': articles
}