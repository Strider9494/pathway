import React from 'react';
import connect from './connect';
import history from '../../history';
import {
  FormContainer,
  FormButton,
  StyledForm,
  FormInput,
  WarningMessge,
  FormTitle,
} from '../FormComponents';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      schema: {
        email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        password: /^[a-zA-Z0-9]{8,16}$/,
      },
    };
  }

  handleForm = (event) => {
    event.preventDefault();
    const state = { ...this.state };
    const props = { ...this.props };
    this.setState({
      password: '',
    });
    const userParams = {
      email: state.email,
      password: state.password,
    };

    props.tryLog(userParams);
    return '';
  };

  handleChange = (event) => {
    this.setState({
      [event.target.dataset.id]: event.target.value,
    });
  };

  toRegistration = () => {
    const props = { ...this.props };
    props.toReg();
    history.push('/registration');
  };

  render() {
    const state = { ...this.state };
    const props = { ...this.props };
    return (
      <FormContainer>
        <StyledForm noValidate onSubmit={this.handleForm}>
          <FormTitle>Log in</FormTitle>
          {props.store.invalidLog ? <WarningMessge>Incorrect email or password</WarningMessge> : ''}
          <FormInput
            placeholder="Email"
            type="email"
            value={state.email}
            onChange={this.handleChange}
            data-id="email"
          />
          <FormInput
            placeholder="Password"
            type="password"
            value={state.password}
            onChange={this.handleChange}
            data-id="password"
          />
          <FormButton type="submit">Log in</FormButton>
          <FormButton type="button" onClick={this.toRegistration}>
            Registration
          </FormButton>
        </StyledForm>
      </FormContainer>
    );
  }
}

export default connect(Login);
