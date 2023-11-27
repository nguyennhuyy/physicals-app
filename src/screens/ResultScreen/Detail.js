import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppTest from "components/AppTest";
import AppTable from "components/AppTable";
import HTMLView from "components/HTMLView";

export default function DetailResult({ route }) {
  const { t, i18n } = useTranslate();
  const tableHead = [
    t("result.tableHead_2"),
    t("result.tableHead_3"),
    t("result.tableHead_5"),
  ];
  const { dataResult, data } = route.params;

  return (
    <AppContainer title={t("result.title")} back={true}>
      <ScrollView style={styles.container}>
        {data.is_check == 1 && data.is_multiple_choice == 1 && (
          <AppTable
            dataHead={tableHead}
            dataRow={[dataResult]}
            type={"detail"}
          />
        )}

        <View style={[styles.content, { paddingBottom: 16 }]}>
          {data.is_check == 1 && (
            <AppTest
              data={data}
              selectValue={dataResult.value}
              active={true}
              title={data.name}
              description={data.content}
              type="detail"
            />
          )}
          <View>
            {data.answer_explanation && data.is_check == 1 && (
              <View>
                <AppText style={styles.heading_4}>{t("result.guide")}</AppText>
                {data?.answer_explanation.includes("<p") ? (
                  <HTMLView
                    style={{ marginBottom: 12 }}
                    source={data.answer_explanation}
                  />
                ) : (
                  <AppText style={{ marginBottom: 12 }}>{guide}</AppText>
                )}
              </View>
            )}

            {/* <AppText style={styles.heading_4}>{t('result.video')}</AppText>
            <AppImage source={IMG_NAME.IMAGE_LOGO} style={styles.image} /> */}
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
}
