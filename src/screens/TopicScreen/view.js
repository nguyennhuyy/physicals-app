import React, { useEffect } from "react";
import AppContainer from "components/AppContainer";
import useTranslate from "hooks/useTranslate";
import AppFlatList from "components/AppFlatList";
import styles from "./styles";
import Item from "./Item";

export default function TopicScreen(props) {
  const { route, listTopic, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t("category.topic")} back={true} search={true}>
      <AppFlatList
        data={listTopic}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
