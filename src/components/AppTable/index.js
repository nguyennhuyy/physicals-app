import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import AppText from "components/AppText";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import { IMG_NAME, SVG_NAME } from "assets/path";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";

function AppTable({ dataHead, dataRow, style, type = "list" }) {
  const lengthHead = dataHead.length;
  return (
    <View style={style}>
      <View style={{ flexDirection: "row", textAlign: "center" }}>
        {dataHead.map((item, index) => (
          <AppText
            key={`${index}${Math.random() * 10000}`}
            style={[
              {
                width: 100 / lengthHead + "%",
                color: COLOR.WHILE_0,
                backgroundColor: COLOR.BLUE_0,
                textAlign: "center",
                padding: 8,
                fontWeight: "500",
              },
              index + 1 < lengthHead && {
                borderRightWidth: 1,
                borderRightColor: COLOR.WHILE_0,
              },
            ]}
          >
            {item}
          </AppText>
        ))}
      </View>
      <View>
        {dataRow.map((itemData, index) => {
          return (
            <View
              key={`${index}${Math.random() * 10000}`}
              style={{ flexDirection: "row", textAlign: "center" }}
            >
              {type === "list" && (
                <AppText
                  key={`${index}${Math.random() * 10000}`}
                  style={{
                    width: 100 / lengthHead + "%",
                    color:
                      itemData.value === itemData.result
                        ? COLOR.GREEN_0
                        : itemData.value
                        ? COLOR.RED_0
                        : COLOR.GRAY_4,
                    textAlign: "center",
                    padding: 8,
                    textTransform: "uppercase",
                    fontWeight: "500",
                    backgroundColor:
                      type === "list" ? COLOR.WHILE_0 : COLOR.BACK_GROUND_0,
                    borderRightWidth: 1,
                    borderRightColor: COLOR.BORDER_0,
                  }}
                >
                  {index + 1}
                </AppText>
              )}
              <AppText
                key={`${index}${Math.random() * 10000}`}
                style={{
                  width: 100 / lengthHead + "%",
                  color:
                    itemData.value === ""
                      ? COLOR.GRAY_4
                      : itemData.value === itemData.result
                      ? COLOR.GREEN_0
                      : COLOR.RED_0,
                  textAlign: "center",
                  padding: 8,
                  textTransform: "uppercase",
                  fontWeight: "500",
                  backgroundColor:
                    type === "list" ? COLOR.WHILE_0 : COLOR.BACK_GROUND_0,
                  borderRightWidth: 1,
                  borderRightColor: COLOR.BORDER_0,
                }}
              >
                {itemData.value || "-"}
              </AppText>
              <AppText
                key={`${index}${Math.random() * 10000}`}
                style={{
                  width: 100 / lengthHead + "%",
                  color:
                    itemData.value === ""
                      ? COLOR.GRAY_4
                      : itemData.value === itemData.result
                      ? COLOR.GREEN_0
                      : COLOR.RED_0,
                  textAlign: "center",
                  padding: 8,
                  textTransform: "uppercase",
                  fontWeight: "500",
                  backgroundColor:
                    type === "list" ? COLOR.WHILE_0 : COLOR.BACK_GROUND_0,
                  borderRightWidth: 1,
                  borderRightColor: COLOR.BORDER_0,
                }}
              >
                {itemData.result}
              </AppText>

              <TouchableOpacity
                onPress={() => {
                  type === "list" &&
                    NavigationServices.navigate(
                      SCENE_NAMES.DETAIL_RESULT_SCREEN,
                      {
                        dataResult: itemData,
                        data: itemData.question,
                      }
                    );
                }}
                style={{
                  width: 100 / lengthHead + "%",
                  alignItems: "center",
                  padding: 8,
                  backgroundColor:
                    type === "list" ? COLOR.WHILE_0 : COLOR.BACK_GROUND_0,
                }}
              >
                {type === "list" ? (
                  <SVG_NAME.ICON_ARROW_RIGHT />
                ) : itemData.value === itemData.result ? (
                  <SVG_NAME.CORRECT_ICON />
                ) : (
                  <SVG_NAME.WRONG_ICON />
                )}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default React.memo(AppTable);
