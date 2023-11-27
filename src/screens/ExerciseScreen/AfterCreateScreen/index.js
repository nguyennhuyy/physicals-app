import React from "react";
import AfterCreateScreenView from "./view.js";

const AfterCreateScreen = ({ route }) => {
  return <AfterCreateScreenView route={route} />;
};

export default React.memo(AfterCreateScreen);
