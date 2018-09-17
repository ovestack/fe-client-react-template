import React, { Component } from 'react'
import './index.css'

class App extends Component {
    render() {
        return (
            <div className="P-index">
                <h1>hello world</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App
