import React from 'react';
import { connect } from 'react-redux';
import { tryLog } from '../../actions';
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
      invalid: '',
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
    if (!state.schema.email.test(state.email)) {
      return this.setState({
        invalid: 'email',
        password: '',
      });
    }
    if (!state.schema.password.test(state.password)) {
      return this.setState({
        invalid: 'password',
        password: '',
      });
    }
    this.setState({
      invalid: '',
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

  render() {
    const state = { ...this.state };
    const props = { ...this.props };
    return (
      <FormContainer>
        <StyledForm noValidate onSubmit={this.handleForm}>
          <FormTitle>Log in</FormTitle>
          {state.invalid ? <WarningMessge>{`Incorrect ${state.invalid} `}</WarningMessge> : ''}
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
          <FormButton>Log in</FormButton>
        </StyledForm>
      </FormContainer>
    );
  }
}

export default connect(
  state => ({
    store: state.login,
  }),
  dispatch => ({
    tryLog: (userParams) => {
      dispatch(tryLog(userParams));
    },
  }),
)(Login);
