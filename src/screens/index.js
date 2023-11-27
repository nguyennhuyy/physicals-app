import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";
// import NetInfo from "@react-native-community/netinfo";

import { getIsLoadingSelector } from "appRedux/selectors/loadingSelector";

import RootStack from "navigation/Root";
import { onAppConnectivityChange } from "appRedux/actions/connectActions";
import { getActiveRouteName } from "navigation/activeRouteName";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import AppLoading from "components/AppLoading";
import { useActions } from "hooks/useActions";
import OnBoarding from "./OnBoarding";
import { getFirstTimeUseAppValueSelector } from "appRedux/selectors/otherSelector";
import FCMService from "utils/FCMService";
import { plusBadge, minusBadge } from "appRedux/actions/otherActions";
// import { withCodePush } from "utils/codepush";

import NotificationPopup from "react-native-push-notification-popup";

function Screens() {
  const actions = useActions({
    onAppConnectivityChange,
    plusBadge,
    minusBadge,
  });

  // const isConnected = useSelectorShallow(getIsConnectedSelector);
  const isFirstTimeUseApp = useSelectorShallow(getFirstTimeUseAppValueSelector);

  const onNavigationStateChange = (action) => {
    const routeName = getActiveRouteName(action);
    if (currentRouteName !== routeName) {
      setCurrentRouteName(routeName);
    }
  };

  useEffect(() => {
    //kill app or background
    FCMService.initPushNotifications((notification) => {
      const { userInteraction } = notification;
      if (userInteraction) {
        console.log("notification when kill app", notification);
        const data = notification.data;
        routeNotify(data);
        actions.plusBadge();
        return;
      }
    });
    FCMService.subscribeToTopic("alldevices");

    // open-app
    FCMService.onMessage((item) => {
      try {
        const { notification, data } = item;
        const dataNotificaton = {
          title: notification.title,
          body: notification.body,
          data,
        };
        console.log("notification when open app", dataNotificaton);
        notify(dataNotificaton);
        actions.plusBadge();
      } catch (error) {}
    });
  }, [notify, routeNotify]);

  const _popup = useRef();

  const notify = useMemo(
    () => (data) => {
      _popup.current.show({
        onPress() {
          routeNotify(data.data);
        },
        appIconSource: require("../assets/images/ic_launcher.png"),
        appTitle: "iTourism",
        timeText: "Now",
        title: data.title,
        body: data.body,
        slideOutTime: 5000,
      });
    },
    [routeNotify]
  );

  const routeNotify = useMemo(() => (data) => {
    if (!data || !data.type) {
      return;
    }

    if (data.notification_id) {
      actions.minusBadge();
      const opt = {
        callback: () => {},
        id: data.notification_id,
      };
    }
  });

  const [currentRouteName, setCurrentRouteName] = useState("");
  const isLoading = useSelectorShallow(getIsLoadingSelector);

  return (
    <>
      {isFirstTimeUseApp ? (
        <OnBoarding />
      ) : (
        <RootStack onNavigationStateChange={onNavigationStateChange} />
      )}
      <NotificationPopup ref={_popup} />
      {isLoading && <AppLoading />}
    </>
  );
}

// export default Screens;
// const ReachApp = __DEV__ ? Screens : withCodePush(Screens);
const ReachApp = Screens;

export default ReachApp;
