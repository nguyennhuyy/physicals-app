import React from "react";
import { StyleSheet } from "react-native";
import useTranslate from "hooks/useTranslate";
import ItemConstant from "screens/ConstantScreen/Item";
import NotData from "../NotData";
import STYLE_GLOBAL from "utils/StyleGlobal";
import AppText from "components/AppText";
import AppFlatList from "components/AppFlatList";
import { COLOR } from "utils/AppConst";

export default function Constant({
  onRefresh,
  refreshing,
  loadMore,
  listData,
}) {
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
      renderItem={({ item }) => <ItemConstant item={item} />}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
}

let styles = StyleSheet.create({
  content: {
    paddingBottom: 4,
  },
  heading_3: {
    ...STYLE_GLOBAL.title2,
    marginBottom: 10,
  },
});
