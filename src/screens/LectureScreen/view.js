import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import styles from "./styles";
import Item from "./Item";
import AppFlatList from "components/AppFlatList";

export default function LectureScreen(props) {
  const { route, listLecture, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t("category.lecture")} search={true} back={true}>
      <AppFlatList
        data={listLecture}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
