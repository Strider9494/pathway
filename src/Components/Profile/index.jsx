import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from '../../history';
import { ProfileContainer, ProfileTitle, ProfileData } from './style';

const Profile = ({ store }) => {
  if (!store.log) {
    history.push('/');
  }
  return (
    <ProfileContainer>
      <ProfileTitle>{`${store.user.firstName} ${store.user.lastName}`}</ProfileTitle>
      <hr />
      <ProfileData>
        {`Email: ${store.user.email}`}
        <br />
        {`ID: ${store.user.id}`}
        <br />
        {`Date: ${store.user.date}`}
      </ProfileData>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(state => ({ store: state.login }))(Profile);
