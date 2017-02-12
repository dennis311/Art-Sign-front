import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Agenda from './components/pages/Agenda';
import NotFound from './components/pages/NotFound';

export default function getRoutes(store) {
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} onLeave={clearMessages}/>
      <Route path="/contact" component={Contact} onLeave={clearMessages}/>
      <Route path="/agenda" component={Agenda} />
      <Route path="*" component={NotFound} onLeave={clearMessages}/>
    </Route>
  );
}
