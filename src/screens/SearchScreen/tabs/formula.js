import React from "react";
import { StyleSheet } from "react-native";
import ItemFormula from "screens/FormulaScreen/Item";
import AppFlatList from "components/AppFlatList";
import { COLOR } from "utils/AppConst";
import useTranslate from "hooks/useTranslate";
import NotData from "../NotData";
import AppText from "components/AppText";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default function Formula({ onRefresh, refreshing, loadMore, listData }) {
  const { t, i18n } = useTranslate();
  return (
    <AppFlatList
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLOR.WHILE_0 }}
      ListHeaderComponent={
        <AppText style={styles.heading_3}>
          {listData.length} {t("exercise.result")}
        </AppText>
      }
      data={listData}
      renderItem={({ item }) => <ItemFormula item={item} />}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
}

let styles = StyleSheet.create({
  heading_3: {
    ...STYLE_GLOBAL.title2,
    marginBottom: 10,
  },
});
