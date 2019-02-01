import { combineReducers } from 'redux';

import login from './login';
import reg from './reg';

export default combineReducers({
  login,
  reg,
});
