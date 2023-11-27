import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import QuestionRelate from "components/Relate/question";
import TopicRelate from "components/Relate/topic";
import FormulaRelate from "components/Relate/formula";
import MATHView from "components/MATHView";
import HTMLView from "components/HTMLView";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";

export default function DetailScreen({ route }) {
  const { data } = route.params;
  return (
    <AppContainer title={data.name} back={true}>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16 }}>
          <AppText style={styles.detailHeading}>{data.name}</AppText>
          <AppText
            style={[
              styles.detailHeading,
              { ...STYLE_GLOBAL.body1, textTransform: "uppercase" },
            ]}
          >
            {data.intro_content}
          </AppText>
          <HTMLView source={data.content} />
        </View>
        {GET.getTheoryTag(data.id).length > 0 && (
          <TopicRelate listTopic={GET.getTheoryTag(data.id)} />
        )}
        {GET.getTheoryQuestion(data.id).length > 0 && (
          <QuestionRelate listQuestion={GET.getTheoryQuestion(data.id)} />
        )}
        {GET.getTheoryFormula(data.id).length > 0 && (
          <FormulaRelate listFormula={GET.getTheoryFormula(data.id)} />
        )}
      </ScrollView>
    </AppContainer>
  );
}
