import React from "react";
import AccountScreenView from "./view.js";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import { getSyncLevelSelector } from "appRedux/selectors/otherSelector";

const AccountScreen = ({ route }) => {
  const syncLevel = useSelectorShallow(getSyncLevelSelector);

  return <AccountScreenView route={route} syncLevel={syncLevel} />;
};

export default React.memo(AccountScreen);
