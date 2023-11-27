import React from "react";
import UsScreenView from "./view.js";

const UsScreen = ({ route }) => {
  return <UsScreenView route={route} />;
};

export default React.memo(UsScreen);
