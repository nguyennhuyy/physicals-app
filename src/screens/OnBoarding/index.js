import React from "react";
import NavigationServices from "navigation/navigationServices";
import { useActions } from "hooks/useActions";
import OnBoardingView from "./view";
import { SCENE_NAMES } from "utils/AppConst";
import { setFirstTimeUseApp } from "appRedux/actions/otherActions";
export default function OnBoarding() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("vi");
  const actions = useActions({ setFirstTimeUseApp });
  const onPressStart = () => {
    actions.setFirstTimeUseApp();
  };

  return (
    <OnBoardingView
      setSelectedLanguage={setSelectedLanguage}
      selectedLanguage={selectedLanguage}
      onPressStart={onPressStart}
    />
  );
}
