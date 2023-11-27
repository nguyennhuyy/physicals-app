import React, { useEffect } from "react";
import AppContainer from "components/AppContainer";
import useTranslate from "hooks/useTranslate";
import Item from "./Item";
import { COLOR } from "utils/AppConst";
import styles from "./styles";
import AppFlatList from "components/AppFlatList";

export default function QuestionScreen(props) {
  const { route, listQuestion, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t("question.title")} back={true} search={true}>
      <AppFlatList
        data={listQuestion}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
