import React, { useEffect, useState, useCallback } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainerSearch from "components/AppContainer_Search";
import AppText from "components/AppText";
import styles from "./styles";
import { GET } from "data/helpers";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR } from "utils/AppConst";
import AppModal from "components/Modal/AppModal";
import AppConfirm from "components/AppConfirm";
import AppCheckBox from "components/AppCheckBox";

const Topic = ({ text, active, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={Math.random()}
      style={[
        styles.btn,
        {
          backgroundColor: active ? COLOR.PRIMARY : COLOR.WHILE_0,
        },
      ]}
    >
      <AppText
        style={{
          color: active ? COLOR.WHILE_0 : COLOR.PRIMARY,
        }}
      >
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

export default function SearchScreen(props) {
  const {
    route,
    listCategory,
    resetFilter,
    onRefresh,
    refreshing,
    loadMore,
    activeTab,
    setActiveTab,
    ScreenActive,
    quantityFilter,
    setQuantityFilter,
    valueSearch,
    setValueSearch,
    showModalFilter,
    setShowModalFilter,
    listData,
    typeQuestion,
    setTypeQuestion,
    levelDifficult,
    setLevelDifficult,
    onSearch,
  } = props;
  const { t, i18n } = useTranslate();
  return (
    <>
      <AppContainerSearch
        back={true}
        onFilter={() => setShowModalFilter(true)}
        quantityFilter={quantityFilter}
        valueSearch={valueSearch}
        changeValueSearch={setValueSearch}
        onSearch={onSearch}
      >
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={[
                styles.listTopic,
                { marginLeft: 16, marginRight: 4, marginVertical: 8 },
              ]}
            >
              {listCategory.map((category, index) => (
                <Topic
                  key={`${index}${Math.random() * 10000}`}
                  text={category.text}
                  active={category.id === activeTab}
                  onPress={() => {
                    setActiveTab(category.id);
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        <ScreenActive
          valueSearch={valueSearch}
          listData={listData}
          refreshing={refreshing}
          onRefresh={onRefresh}
          loadMore={loadMore}
        />
      </AppContainerSearch>
      <AppModal
        showAppModal={showModalFilter}
        setShowAppModal={setShowModalFilter}
        titleModal={t("search.filter")}
        closeModal={true}
      >
        <View style={{ padding: 16 }}>
          <AppText style={styles.heading_3}>
            {t("search.type_question")}
          </AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {typeQuestion.map((item, index) => (
              <AppCheckBox
                style={{ flex: 1, marginBottom: 8 }}
                key={`${index}${Math.random() * 10000}`}
                item={item}
                onPress={() => {
                  let newData = typeQuestion.map((data) => {
                    data.text === item.text && (data.active = !item.active);
                    return data;
                  });
                  setTypeQuestion(newData);
                }}
              />
            ))}
          </View>
          <AppText style={styles.heading_3}>
            {t("search.level_difficult")}
          </AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {levelDifficult.map((item, index) => (
              <AppCheckBox
                style={{ flex: 1, marginBottom: 8 }}
                key={`${index}${Math.random() * 10000}`}
                item={item}
                onPress={() => {
                  let newData = levelDifficult.map((data) => {
                    data.text === item.text && (data.active = !item.active);
                    return data;
                  });
                  setLevelDifficult(newData);
                }}
              />
            ))}
          </View>
        </View>
        <AppConfirm
          confirmText={t("button.search")}
          cancel={true}
          cancelText={t("button.reset")}
          onCancel={resetFilter}
          onPress={() => {
            setShowModalFilter(false);
            setQuantityFilter(
              levelDifficult.filter((item) => item.active).length +
                typeQuestion.filter((item) => item.active).length
            );
          }}
        />
      </AppModal>
    </>
  );
}
