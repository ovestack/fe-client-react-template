function articles(state = {
    articles: [],
    fetching: false
}, action) {
    switch (action.type) {
        case 'GETING_ARTICLE':
            return Object.assign({}, state, {
                fetching: true
            })
        case 'FETCH_ARTICLE':
            return Object.assign({}, state, {
                fetching: false,
                articles: action.articles
            })
    }
    return state
}

export default {
    'test/articles': articles
}