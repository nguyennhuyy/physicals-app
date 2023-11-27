import React from 'react';
import ResultScreenView from './view';

const ResultScreen = ({ route }) => {
  //api

  return <ResultScreenView route={route} />;
};

export default React.memo(ResultScreen);
