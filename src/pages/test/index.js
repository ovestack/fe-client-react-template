import React, { Component } from 'react'
import {
    connect
} from 'react-redux'

class Test extends Component {
    render() {
        return (
            <div className="P-test">
                <ul>
                    {
                        this.props.articles.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
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