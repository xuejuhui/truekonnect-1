import React, {Component} from "react";
import firebase from 'firebase';
import {connect} from 'react-redux';

import {Form, FormGroup, Col, Label, Input, Button} from 'reactstrap';

import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUpForm';
// import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { phoneLogin, signIn } from  "../../Redux/actions/auth"

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
  verificationCode: '',
  phoneNumber: '',
  confirmationResult: ''
};

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }

    componentDidMount() {
        console.log(this.props)
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(this.recaptcha, {
            'size': 'invisible',
            'callback': (response) => {
                return response
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        });
        window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    }

    onButtonPress = () => {
        const {phoneNumber} = this.state;
        if (phoneNumber === '') {
            return alert('Must fill in all fields')
        }
        let appVerifier = window.recaptchaVerifier;
        this.props.phoneLogin(phoneNumber, appVerifier)
    };


    handlePhoneNumberTextChange = (event) => {
        this.setState({phoneNumber: event.target.value})
    };

    handlePassTextChange = (event) => {
        this.setState({verificationCode: event.target.value})
    };
    onSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      verificationCode,
    } = this.state;

    const {
      history,
    } = this.props;
    this.props.signIn(email, verificationCode)
    history.push(routes.ACCOUNT);

}
    render() {
    const {
      email,
      verificationCode,
      error,
    } = this.state;

    const isInvalid =
      verificationCode === '' ||
      email === '';

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={8}>
                            <Input type="email" autoComplete='email' name="email" id="exampleEmail" onChange={event => this.setState(byPropKey('email', event.target.value))}
                                   value={email} placeholder="with a placeholder"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={8}>
                            <Input type="password" autoComplete='currentPassword' name="password" id="examplePassword"
                                   onChange={event => this.setState(byPropKey('verificationCode', event.target.value))} value={verificationCode}
                                   placeholder="password placeholder"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{size: 2, offset: 5}}>
                          <button disabled={isInvalid} type="submit">
                            Sign In
                          </button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePhoneNumber" sm={2}>Phone Number</Label>
                        <Col sm={8}>
                            <Input
                                type="text"
                                autoComplete='tel-national'
                                name="phoneNumber"
                                id="examplePhoneNumber"
                                onChange={this.handlePhoneNumberTextChange}
                                value={this.state.phoneNumber}
                                placeholder="with a placeholder"/>
                        </Col>
                    </FormGroup>
                    <Col sm={{size: 2, offset: 4}}>
                        <div ref={(ref) => this.recaptcha = ref}></div>
                    </Col>
                    <FormGroup check row>
                        <Col sm={{size: 2, offset: 5}}>
                            <Button onClick={e => {
                                e.preventDefault();
                                this.onButtonPress(e)
                            }}>
                                Send Code
                            </Button>
                        </Col>
                    </FormGroup>
                    { error && <p>{error.message}</p> }
                </Form>
            </div>
        );
    }
}


export default withRouter(connect(null, { phoneLogin, signIn })(SignInForm));

export {
  SignInForm,
};