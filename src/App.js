import React, { Component } from 'react';
import './mycvgrid.css';
import {Route, Switch } from 'react-router-dom';
import Hovedside from '../src/components/hovedside'
import Erfaringkomponent from './components/Erfaringkomponent';
import Prosjekterkomponent from './components/Prosjekterkomponent';
import Skatteetatenkomponent from './components/Skatteetatenkomponent';
import Hjem from './components/Hjem';

class App extends Component {

  render() {
    return (
      
      <div className="App">
       
          <Switch>
            <Route exact path="/" component= {Hjem}/>
            <Route exact path="/Hovedside" component={Hovedside} />
            <Route path="/Erfaring" component={Erfaringkomponent} />
            <Route path="/Prosjekter" component={Prosjekterkomponent} />
            <Route path="/Skatteetaten" component={Skatteetatenkomponent} />
            <Route path="/Helsedirektoratet" component={Prosjekterkomponent} />
            <Route path="/Telenor" component={Prosjekterkomponent} />
            
          </Switch>
      </div>
      
    );
    
  }
}

export default App;
