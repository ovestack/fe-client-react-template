import {
    createAction
} from 'redux-actions'
export var ACTIONS = {
    LOADING: 'TEST:LOADING',
    GET: 'TEST:FETCH_ARTICLE'
}
var fetching = createAction(ACTIONS.LOADING)

var fetchArticle = createAction(ACTIONS.GET, articles => {
    return {
        articles
    }
})

export function getAritcle() {
    return function(dispatch) {
        dispatch(fetching())
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                dispatch(fetchArticle([1, 2, 3, 4]))
                resolve()
            }, 200)
        })
    }
}