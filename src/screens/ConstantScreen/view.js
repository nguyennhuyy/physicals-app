import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import Item from "./Item";
import styles from "./styles";
import AppFlatList from "components/AppFlatList";

export default function ConstantScreen(props) {
  const { route, listConstant, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();

  return (
    <AppContainer title={t("category.constant")} search={true} back={true}>
      <AppFlatList
        data={listConstant}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
