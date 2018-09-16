var fetching = function() {
    return {
        type: 'GETING_ARTICLE'
    }
}

var fetchArticle = function(articles) {
    return {
        type: 'FETCH_ARTICLE',
        articles
    }
}

export function getAritcle() {
    return function(dispatch) {
        dispatch(fetching())
        setTimeout(function() {
            dispatch(fetchArticle([1,2,3,4]))
        }, 2000)
    }
}