import React, {Component} from "react";
import firebase from 'firebase';
import axios from 'axios';

import {Form, FormGroup, Col, Label, Input, Button} from 'reactstrap';

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
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={8}>
          <Input type="email" name="email" id="exampleEmail"  onChange={this.handleEmailTextChange} value={this.state.email} placeholder="with a placeholder"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={8}>
          <Input type="password" name="password" id="examplePassword"   onChange={this.handlePassTextChange} value={this.state.password} placeholder="password placeholder"/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 2, offset: 5 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default SignUpForm;
