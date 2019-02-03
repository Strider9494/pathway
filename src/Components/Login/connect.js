import { connect } from 'react-redux';
import { tryLog, regForm } from '../../actions';

export default connect(
  state => ({
    store: state.login,
  }),
  dispatch => ({
    tryLog: (userParams) => {
      dispatch(tryLog(userParams));
    },
    toReg: () => {
      dispatch(regForm());
    },
  }),
);
