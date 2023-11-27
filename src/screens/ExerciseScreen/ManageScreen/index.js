import React from "react";
import ManageScreenView from "./view.js";

const ManageScreen = ({ route }) => {
  return <ManageScreenView route={route} />;
};

export default React.memo(ManageScreen);
