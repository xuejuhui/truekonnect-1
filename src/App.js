import React, {Component} from 'react';
import './App.css';
import SignUpForm from "./Components/Reusable/SignUpForm";
import Checkout from './Components/Reusable/Checkout';

class App extends Component {
  render() {
    return (
        <div className="App">
          <SignUpForm/>
            <Checkout
                name={'The Road to learn React'}
                description={'Only the Book'}
                amount={1}
            />
        </div>);
  }
}

export default App;
