import React from 'react';
import {connect} from 'react-redux'
import Jumbotron from '../common/Jumbotron';
import Messages from '../common/Messages';

class Home extends React.Component {

  render() {
    
    return (
      <div className="container-fluid">
        <Jumbotron title="L'association Art'Sign" content="Art’Sign est une association de loi 1901, créée en 2006, avec le projet de promouvoir et développer l\’action culturelle en direction des sourds. Elle s’inscrit dans la culture de la Langue des Signes Française."/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {messages: state.messages};
};

export default connect(mapStateToProps)(Home);
