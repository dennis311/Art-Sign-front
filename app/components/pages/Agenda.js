import React from 'react';
import AgendaComponent from '../common/AgendaComponnents';
import Jumbotron from '../common/Jumbotron';

class Agenda extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            api: [
                {
                    "id": 1,
                    "title": "Voeux 2017",
                    "date": "2017-01-17T17:00:00Z",
                    "place": "Paris",
                    "description": "Les voeux de l'association pour 2017 !"
                }, {
                    "id": 3,
                    "title": "Spectacle de début d'année",
                    "date": "2017-01-01T23:00:00Z",
                    "place": "Paris",
                    "description": "Fêtons ensemble le début d'année 2017 !"
                }, {
                    "id": 6,
                    "title": "qzehy",
                    "date": "2016-12-31T23:00:00Z",
                    "place": "dfsj",
                    "description": "qdfj"
                }
            ]
        }
    }

    render() {

        let agenda = (this.state.api || []).map((v, i) => {

            let str = v.date.split('T');
            let date = str[0].split('-');

            return <AgendaComponent title={v.title} place={v.place} year={date[0]} month={date[1]} day={date[2]} description={v.description} />
            
        });

        return (
            <div>

                <div className="container-fluid">
                    <Jumbotron title="Le calendrier des evenements" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend venenatis ipsum sit amet hendrerit. Proin in urna eleifend, dignissim metus sit amet, facilisis elit. Vivamus rhoncus eleifend lectus vitae aliquet. Donec condimentum arcu eu ultricies ullamcorper. Morbi scelerisque malesuada nibh. Curabitur nulla risus, blandit quis tellus nec, tempus iaculis nisl. Quisque lacinia elit ut lobortis luctus. Nulla vel aliquam turpis."/>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        {agenda}
                    </div>
                </div>
            
            </div>
        );

    }

}

export default Agenda;