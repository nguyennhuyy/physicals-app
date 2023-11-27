import React from 'react';
import PracticeScreenView from './view';

const PracticeScreen = ({ route }) => {
  //api

  return <PracticeScreenView route={route} />;
};

export default React.memo(PracticeScreen);
