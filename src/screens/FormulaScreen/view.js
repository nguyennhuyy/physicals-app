import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import MATHView from "components/MATHView";
import HTMLView from "components/HTMLView";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppFlatList from "components/AppFlatList";
import NavigationServices from "navigation/navigationServices";
import Item from "./Item";

export default function FormulaScreen(props) {
  const { route, listFormula, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t("formula.title")} search={true} back={true}>
      <AppFlatList
        data={listFormula}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
