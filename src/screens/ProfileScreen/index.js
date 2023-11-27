import React from 'react';
import ProfileScreenView from './view.js';

const ProfileScreen = ({ route }) => {
  //api

  return <ProfileScreenView route={route} />;
};

export default React.memo(ProfileScreen);
