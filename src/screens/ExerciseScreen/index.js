import React from "react";
import ExerciseScreenView from "./view";

const ExerciseScreen = ({ route }) => {
  //api

  return <ExerciseScreenView route={route} />;
};

export default React.memo(ExerciseScreen);
