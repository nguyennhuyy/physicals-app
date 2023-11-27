/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { View, Platform } from "react-native";

//components
import AppText from "../AppText";
import NavigationServices from "navigation/navigationServices";

//utils
import STYLE_GLOBAL from "utils/StyleGlobal";
import { SVG_NAME } from "assets/path";
import { scalePortrait } from "utils/responsive";
import { COLOR } from "utils/AppConst";
import useTranslate from "hooks/useTranslate";

const AppContainer_Search = ({
  style,
  title,
  hide = false,
  back = true,
  add = true,
  onBack,
  onFilter,
  children,
  quantityFilter,
  valueSearch,
  changeValueSearch,
  onSearch
}) => {
  const { t, i18n } = useTranslate();
  return (
    <View style={styles.container}>
      {!hide ? (
        <View style={styles.header}>
          <View style={styles.headerWrap}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {back && (
                <TouchableOpacity
                  style={{ marginRight: 4, padding: 8 }}
                  onPress={onBack ? onBack : () => NavigationServices.goBack()}
                >
                  <SVG_NAME.ICON_BACK />
                </TouchableOpacity>
              )}
              <View style={{ flex: 1 }}>
                <TextInput
                  style={styles.input}
                  placeholder={t("button.search")}
                  value={valueSearch}
                  onChangeText={changeValueSearch}
                />
                <View style={styles.search}>
                  <SVG_NAME.SEARCH2 />
                </View>

                {/* <TouchableOpacity onPress={onFilter} style={styles.filter}>
                  <SVG_NAME.ICON_FILTER />
                  {quantityFilter !== "" && +quantityFilter > 0 && (
                    <AppText style={styles.quantityFilter}>
                      {quantityFilter}
                    </AppText>
                  )}
                </TouchableOpacity> */}
              </View>
              <TouchableOpacity
                style={styles.btnSearch}
                onPress={onSearch}
              >
                <AppText style={{ color: COLOR.WHILE_0, ...STYLE_GLOBAL.weight500 }}>{t("search.text")}</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={STYLE_GLOBAL.paddingIPX} />
      )}

      <View
        style={[
          {
            flex: 1,
            height: "100%",
            width: "100%",
            backgroundColor: COLOR.WHILE_0,
          },
          style,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default AppContainer_Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: COLOR.WHILE_0,
  },
  header: {
    backgroundColor: COLOR.PRIMARY,
  },
  headerWrap: {
    marginTop: 46,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  headerContainer: {
    minHeight: scalePortrait(40, 30),
    paddingBottom: 5,
  },
  title: {
    textAlign: "center",
    paddingVertical: 5,
  },
  btnIconHeader: {
    paddingVertical: 5,
    zIndex: 10,
    paddingHorizontal: 16,
  },
  btn: {
    maxHeight: 40,
    borderRadius: 4,
    backgroundColor: "#E6EBF0",
    alignItems: "center",
    justifyContent: "center",
  },
  viewBtn: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderRadius: 12,
    borderColor: COLOR.PRIMARY,
    borderWidth: 1,
    color: COLOR.GRAY_0,
    paddingHorizontal: 32,
    fontSize: 14,
    backgroundColor: COLOR.WHILE_0,
  },
  search: {
    position: "absolute",
    top: 0,
    left: 2,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    width: 28,
  },
  btnSearch: {
    padding: 8,
    color: COLOR.WHILE_0,
    borderWidth: 2,
    borderColor: COLOR.WHILE_0,
    borderRadius: 8,
    marginLeft: 8
  },
  filter: {
    position: "absolute",
    top: 0,
    right: 4,
    bottom: 0,
    justifyContent: "center",
  },
  quantityFilter: {
    position: "absolute",
    top: 8,
    fontSize: 10,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 16,
    height: 16,
    borderRadius: 8,
    color: COLOR.WHILE_0,
    backgroundColor: COLOR.RED_0,
    // alignItems: "center",
  },
});
