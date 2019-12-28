import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Header from './Components/Header'
import Home from './Components/Home'
import Default from './Components/Default'
import Footer from './Components/Footer'
import Drumpad from './Components/DrumPad/Drumpad';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} /> {/*Done for now*/}
          <Route path='/drumpad' component={Drumpad} />
          <Route component={Default} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
