import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../actions';
import {
  HeaderConteiner, HeaderTitle, NavConteiner, StyledLink, LogOutBut,
} from './style';

const Header = ({ store, loggingOut }) => (
  <HeaderConteiner>
    <HeaderTitle>Pathway</HeaderTitle>
    <NavConteiner>
      {!store.log ? (
        <StyledLink to="/">Log in</StyledLink>
      ) : (
        <LogOutBut onClick={loggingOut}> Log out </LogOutBut>
      )}
    </NavConteiner>
  </HeaderConteiner>
);

Header.propTypes = {
  store: PropTypes.shape({
    log: PropTypes.bool.isRequired,
  }).isRequired,
  loggingOut: PropTypes.func.isRequired,
};

export default connect(
  state => ({ store: state.login }),
  dispatch => ({
    loggingOut: () => {
      dispatch(logOut());
    },
  }),
)(Header);
