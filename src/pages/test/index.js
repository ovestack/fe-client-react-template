import React, { Component } from 'react'
import {
    connect
} from 'react-redux'
import {
    Link
} from 'react-router'

import {
    getAritcle
} from '../../redux/test/action'
class Test extends Component {
    static fetchData(state, dispatch) {
        return dispatch(getAritcle())
    }
    componentDidMount() {
        if (!this.props.articles.length) {
            Test.fetchData(this.props.state, this.props.dispatch)
        }
    }
    render() {
        var {
            articles,
            fetching
        } = this.props
        return (
            <div className="P-test">
                {
                    fetching ? <p>loading...</p> :
                    <ul>
                        {
                            articles.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                        <li><Link to="/test/inner">to inner page</Link></li>
                    </ul>
                }
                {this.props.children}
            </div>
        )
    }
}

export default connect(function(state) {
    var {
        fetching,
        articles
    } = state['test/articles']
    return {
        fetching,
        articles
    }
})(Test)