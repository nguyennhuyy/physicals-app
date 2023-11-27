import React from "react";
import LanguageScreenView from "./view.js";

const LanguageScreen = ({ route }) => {
  return <LanguageScreenView route={route} />;
};

export default React.memo(LanguageScreen);
