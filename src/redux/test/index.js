import {
    handleActions
} from 'redux-actions'
import {
    ACTIONS
} from './action'

var articles = handleActions({
    [ACTIONS.LOADING]: (state, action) => {
        return Object.assign({}, state, {
            fetching: true
        })
    },
    [ACTIONS.GET]: (state, action) => {
        return Object.assign({}, state, {
            fetching: false,
            articles: action.payload.articles
        })
    }
}, {
    articles: [],
    fetching: false
})

export default {
    'test/articles': articles
}