import React, {Component} from "react";
import firebase from 'firebase';
import axios from 'axios';

import {Form, FormGroup, Label, Input} from 'reactstrap';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onButtonPress() {
    const {email, password} = this.state;

  //   if (email === '' || password === '') {
  //     return alert('Must fill in all fields')
  //   }
  //   return (firebase.auth().createUserWithEmailAndPassword(email, password)
  //   // .then(() => axios.post('http://localhost:3000/users/new', {
  //   //     email: email,
  //   //     user_token: firebase.auth().currentUser.uid,
  //   // }))
  //   // .then(() => console.log('this works'))))
}

  handleEmailTextChange = (event) => {
    this.setState({email: event.target.value})
  };

  handlePassTextChange = (event) => {
    this.setState({password: event.target.value})
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" onChange={this.handleEmailTextChange} value={this.state.email} placeholder="with a placeholder"/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" onChange={this.handlePassTextChange} value={this.state.password} placeholder="password placeholder"/>
        </FormGroup>
      </Form>
    );
  }
}

export default SignUpForm;
