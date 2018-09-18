export var ACTIONS = {
    LOADING: 'TEST:LOADING',
    GET: 'TEST:FETCH_ARTICLE'
}
var fetching = function() {
    return {
        type: ACTIONS.LOADING
    }
}

var fetchArticle = function(articles) {
    return {
        type: ACTIONS.GET,
        articles
    }
}

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