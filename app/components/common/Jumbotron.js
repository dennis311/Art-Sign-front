import React from 'react';

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;