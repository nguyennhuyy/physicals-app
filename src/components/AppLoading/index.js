import React from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {COLOR} from 'utils/AppConst';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
});
function AppLoading() {
  return (
    <View style={styles.view}>
      <Spinner color={COLOR.BLUE_1} size="large" visible />
    </View>
  );
}

export default React.memo(AppLoading);
