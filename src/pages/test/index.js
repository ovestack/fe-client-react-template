import React, { Component } from 'react'

class Test extends Component {
    render() {
        return (
            <div className="P-test">
                test
                {this.props.children}
            </div>
        )
    }
}

export default Test