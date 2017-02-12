import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
