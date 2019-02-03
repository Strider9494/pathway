/* eslint-disable no-nested-ternary */
import React from 'react';
import connect from './connect';
import {
  FormContainer,
  FormButton,
  StyledForm,
  FormInput,
  WarningMessge,
  FormTitle,
} from '../FormComponents';
import { PasswordGuide, GuideList } from './style';

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      invalid: '',
      guideOpen: false,
      schema: {
        firstName: /^[a-zA-Z]{2,16}$/,
        lastName: /^[a-zA-Z]{2,16}$/,
        email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        password: /^[a-zA-Z0-9]{8,16}$/,
      },
    };
  }

  handleForm = (event) => {
    event.preventDefault();
    const state = { ...this.state };
    const props = { ...this.props };
    if (!state.schema.firstName.test(state.firstName)) {
      return this.setState({
        password: '',
        invalid: 'first name',
      });
    }
    if (!state.schema.lastName.test(state.lastName)) {
      return this.setState({
        password: '',
        invalid: 'last name',
      });
    }
    if (!state.schema.email.test(state.email)) {
      return this.setState({
        password: '',
        invalid: 'email',
      });
    }
    if (!state.schema.password.test(state.password)) {
      return this.setState({
        password: '',
        invalid: 'password',
      });
    }
    this.setState({
      password: '',
      invalid: '',
    });
    const userParams = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
    };

    return props.tryReg(userParams);
  };

  handleChange = event => this.setState({
    [event.target.dataset.id]: event.target.value,
  });

  handleBlur = (event) => {
    const state = { ...this.state };
    if (!state.schema[event.target.dataset.id].test(state[event.target.dataset.id])) {
      switch (event.target.dataset.id) {
        case 'firstName':
          return this.setState({
            invalid: 'first name',
          });
        case 'lastName':
          return this.setState({
            invalid: 'last name',
          });
        case 'email':
          return this.setState({
            invalid: 'email',
          });
        case 'password':
          return this.setState({
            invalid: 'password',
          });
        default:
          return '';
      }
    } else {
      this.setState({ invalid: '' });
    }
    return '';
  };

  render() {
    const state = { ...this.state };
    const props = { ...this.props };
    if (!props.store.reg) {
      return (
        <FormContainer>
          <StyledForm noValidate onSubmit={this.handleForm}>
            <FormTitle>Registration</FormTitle>
            {state.invalid ? (
              <WarningMessge>{`Incorrect ${state.invalid} `}</WarningMessge>
            ) : props.store.invalidReg ? (
              <WarningMessge>{props.store.reason}</WarningMessge>
            ) : (
              ''
            )}
            <FormInput
              placeholder="First name"
              type="text"
              value={state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              data-id="firstName"
            />
            <FormInput
              placeholder="Last Name"
              type="text"
              value={state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              data-id="lastName"
            />
            <FormInput
              placeholder="Email"
              type="email"
              value={state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              data-id="email"
            />
            <FormInput
              placeholder="Password"
              type="password"
              value={state.password}
              onFocus={() => {
                this.setState({ guideOpen: true });
              }}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              data-id="password"
            />
            <PasswordGuide open={state.guideOpen}>
              <GuideList>
                <li>Use 8-16 characters.</li>
                <li>Use only numbers and alphabetic characters</li>
              </GuideList>
            </PasswordGuide>
            <FormButton>Sign-up</FormButton>
          </StyledForm>
        </FormContainer>
      );
    }
    return (
      <FormContainer>
        <FormTitle>Registered!</FormTitle>
      </FormContainer>
    );
  }
}

export default connect(Registration);
