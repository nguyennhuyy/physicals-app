import { SVG_NAME } from "assets/path";
import AppText from "components/AppText";
import useTranslate from "hooks/useTranslate";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modalbox";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ModalSelectItem({
  onClosed,
  isOpen,
  listData,
  keyDisplay,
  title,
  onPress,
}) {
  const { t } = useTranslate();
  return (
    <Modal
      position="bottom"
      onClosed={onClosed}
      isOpen={isOpen}
      style={styles.viewModal}
    >
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onClosed()}
          style={styles.iconClose}
        >
          <SVG_NAME.CLOSE_ICON />
        </TouchableOpacity>
        <AppText
          style={[
            STYLE_GLOBAL.title1,
            STYLE_GLOBAL.colorTextBlack,
            styles.titleHeader,
          ]}
        >
          {title}
        </AppText>
      </View>
      {listData && listData.length === 0 ? (
        <View style={styles.empty}>
          <AppText style={[STYLE_GLOBAL.body1]}>
            {t("common:component.noInfo")}
          </AppText>
        </View>
      ) : (
        <GestureHandlerRootView>
          <ScrollView>
            {listData &&
              listData.length > 0 &&
              listData.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={1}
                  key={index}
                  style={styles.item}
                  onPress={
                    onPress
                      ? () => {
                          onClosed();
                          onPress(item);
                        }
                      : () => {}
                  }
                >
                  <AppText style={[STYLE_GLOBAL.body1, styles.title]}>
                    {keyDisplay ? item[keyDisplay] : item}
                  </AppText>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </GestureHandlerRootView>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewModal: {
    height: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.WHILE_0,
    maxHeight: "75%",
    paddingBottom: 20,
  },
  header: {
    marginTop: 13,
    marginBottom: 13,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: COLOR.BLACK_1,
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  item: {
    borderRadius: 16,
    backgroundColor: COLOR.WHITE_2,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  titleHeader: {
    textAlign: "center",
    flex: 1,
  },
  iconClose: {
    position: "absolute",
    left: 15,
    zIndex: 5,
    padding: 5,
  },
  empty: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
