import actions from '../actions';

const regState = {
  reg: false,
  invalidReg: false,
  reason: '',
};

const reg = (state = regState, action) => {
  switch (action.type) {
    case actions.REG_SUCCES:
      return {
        ...state,
        reg: true,
        invalidReg: false,
        reason: '',
      };
    case actions.REG_FAIL:
      return { ...state, invalidReg: true, reason: action.reason };
    case actions.REG_FORM:
      return {
        ...state,
        reg: false,
        invalidReg: false,
        reason: '',
      };
    default:
      return state;
  }
};

export default reg;
