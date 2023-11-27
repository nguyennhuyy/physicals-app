import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import NotData from "screens/SearchScreen/NotData";
import React from "react";
import { COLOR } from "utils/AppConst";

const AppFlatList = ({
  data = [],
  refreshing,
  onRefresh,
  renderItem,
  emptyComponent,
  loadMore,
  style,
  ...props
}) => {
  const RenderSeparator = () => {
    return <View />;
  };

  return (
    <FlatList
      style={[styles.container, style]}
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 4,
      }}
      ItemSeparatorComponent={() => <RenderSeparator />}
      data={data || []}
      keyExtractor={(item, index) => `${index}${Math.random(10000)}`}
      renderItem={(item, index) => renderItem(item)}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={<NotData />}
      onEndReached={loadMore}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={COLOR.BLUE_1}
        />
      }
      {...props}
    >
      <View style={{ height: 16, width: "100%" }}></View>
    </FlatList>
  );
};

export default React.memo(AppFlatList);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
  },
});
