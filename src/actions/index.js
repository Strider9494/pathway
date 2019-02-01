import history from '../history';

const actions = {
  LOGGING: 'LOGGING',
  LOG_OUT: 'LOG_OUT',
  LOG_IN: 'LOG_IN',
  LOG_FAIL: 'LOG_FAIL',
  REG_SUCCES: 'REG_SUCCES',
  REG_FAIL: 'REG_FAIL',
  REG_FORM: 'REG_FORM',
};

export const logOut = () => ({ type: actions.LOG_OUT });

const logging = () => ({ type: actions.LOGGING });

const logFail = reason => ({ type: actions.LOG_FAIL, reason });

const login = user => ({ type: actions.LOG_IN, user });

const regSucces = () => ({ type: actions.REG_SUCCES });

const regFail = reason => ({ type: actions.REG_FAIL, reason });

export const regForm = () => ({ type: actions.REG_FORM });

const checkReg = response => (dispatch) => {
  if (response.reg) {
    return dispatch(regSucces());
  }
  return dispatch(regFail(response));
};

const recieveUserProps = response => (dispatch) => {
  console.log(response.userResponse);
  if (response.log) {
    dispatch(login(response.userResponse));
    return history.push('/profile');
  }
  return dispatch(logFail(response.reason));
};

export const tryLog = userParams => (dispatch) => {
  dispatch(logging());

  const logOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userParams,
    }),
  };
  return fetch('http://localhost:4200/api/users/login', logOptions)
    .then(response => response.json(), error => console.error(error))
    .then((json) => {
      dispatch(recieveUserProps(json));
    });
};

export const tryReg = userParams => (dispatch) => {
  const regOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userParams,
    }),
  };
  return fetch('http://localhost:4200/api/users/registration', regOptions)
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject();
      },
      err => Promise.reject(err),
    )
    .then(
      (json) => {
        dispatch(checkReg(json));
      },
      err => Promise.reject(err),
    );
};

export default actions;
