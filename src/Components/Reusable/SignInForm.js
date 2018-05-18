import React, {Component} from "react";
import firebase, {recaptchaVerifier} from 'firebase';
import {connect} from 'react-redux';

import {Form, FormGroup, Col, Label, Input, Button} from 'reactstrap';
import {getAllPersons} from "../../Redux/actions/persons";
import { withRouter } from 'react-router-dom';
import { SignUpLink } from './SignUpForm';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

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
        this.phoneLogin()
    };

    phoneLogin = () => {
        const phoneNumber = '+1' + this.state.phoneNumber;
        let appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                let code = prompt(`We have sent a code to ${phoneNumber}, please enter it here`, "");
                if (code) {
                    confirmationResult.confirm(code).then(function (result) {
                        alert('Successfully logged in!')
                    }).catch(function (error) {
                        alert(error.message)
                    });
                }
            }).catch(function (error) {
            alert(error.message)
        });
    }

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

    auth.doSignInWithEmailAndPassword(email, verificationCode)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.ACCOUNT);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });


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
                            <Input type="email" name="email" id="exampleEmail" onChange={event => this.setState(byPropKey('email', event.target.value))}
                                   value={email} placeholder="with a placeholder"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={8}>
                            <Input type="password" name="password" id="examplePassword"
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



// const mapStateToProps = state => {
//     return {
//         persons: state.persons
//     }
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         gap: () => {
//             dispatch(getAllPersons())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)

export default withRouter(SignInPage);

export {
  SignInForm,
};