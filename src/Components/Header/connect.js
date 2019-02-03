import { connect } from 'react-redux';
import { logOut } from '../../actions';

export default connect(
  state => ({ store: state.login }),
  dispatch => ({
    loggingOut: () => {
      dispatch(logOut());
    },
  }),
);
