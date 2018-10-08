import React, { Component } from 'react';
import './mycvgrid.css';
import {Route, Switch } from 'react-router-dom';
import Hovedside from '../src/components/hovedside'
import Erfaringkomponent from './components/Erfaringkomponent';
import Prosjekterkomponent from './components/Prosjekterkomponent';
import Skatteetatenkomponent from './components/Skatteetatenkomponent';

class App extends Component {

  constructor(){
    super();
    this.state= { name: "første" };
    console.log("constr");
  }
  componentWillMount(){
    console.log("comp will mnt");
  }
  render() {
    return (
      
      <div className="App">
       
          <Switch>
            <Route exact path="/" component={Hovedside} />
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
