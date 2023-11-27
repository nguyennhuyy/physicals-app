import React from "react";
import FacebookScreenView from "./view.js";

const FacebookScreen = ({ route }) => {
  return <FacebookScreenView route={route} />;
};

export default React.memo(FacebookScreen);
