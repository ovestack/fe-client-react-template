import React, { Component } from 'react'
import {
    Link
} from 'react-router'
import './index.css'
class App extends Component {
    render() {
        return (
            <div className="P-index">
                <h1>hello world</h1>
                <ul>
                    <li><Link to="/test">to test page</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App
