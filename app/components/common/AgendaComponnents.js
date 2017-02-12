import React from "react";

class AgendaComponnents extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="card">

                    <div className="date">
                        <h3 className="year">{this.props.year}</h3>
                        <p className="day">{this.props.day} - {this.props.month}</p>
                    </div>

                    <div className="descr">
                        <p className="place">lieu: <b>{this.props.place}</b></p>
                        <p className="title">{this.props.title}</p>
                        <p className="description">{this.props.description}</p>
                    </div>

                </div>
            </div>
        )
    }

}

export default AgendaComponnents;