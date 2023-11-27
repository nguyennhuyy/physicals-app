import React, { Children, useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppFlatList from "components/AppFlatList";
import styles from "./styles";
import Item from "./Item";

export default function TheoryScreen(props) {
  const { route, listTheory, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t("category.theory")} search={true} back={true}>
      <AppFlatList
        data={listTheory}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
