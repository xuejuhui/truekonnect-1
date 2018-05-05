import React, {Component} from 'react';
import './App.css';
import SignUpForm from "./Components/Reusable/SignUpForm";
import StylistCard from './Components/Reusable/StylistCard';

class App extends Component {
  render() {
    return (
        <div className="App">
          <SignUpForm/>
          <StylistCard />
        </div>);
  }
}

export default App;
