import { connect } from 'react-redux';
import { tryReg } from '../../actions';

export default connect(
  state => ({
    store: state.reg,
  }),
  dispatch => ({
    tryReg: (userParams) => {
      dispatch(tryReg(userParams));
    },
  }),
);
