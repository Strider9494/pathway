import React from 'react';
import PropTypes from 'prop-types';
import connect from './connect';
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
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default connect(Profile);
