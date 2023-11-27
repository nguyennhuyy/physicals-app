import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import LectureRelate from "components/Relate/lecture";
import TopicRelate from "components/Relate/topic";
import ArticleRelate from "components/Relate/article";
import FormulaRelate from "components/Relate/formula";
import NavigationServices from "navigation/navigationServices";
import HTMLView from "components/HTMLView";
import AppImage from "components/AppImage";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
// import Video from "react-native-video";

export default function DetailScreen({ route }) {
  const { t, i18n } = useTranslate();
  const { data } = route.params;
  const dataChild = GET.getDataByParentId({
    name: DB_NAME.LESSON,
    parent_id: data.id,
  });

  return (
    <AppContainer title={data.name} back={true}>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16 }}>
          <AppText style={styles.detailHeading}>{data.name}</AppText>
          {data.image_one !== null && data.image_one !== "" && (
            <AppImage source={data.image_one} style={styles.image} />
          )}
          <AppText style={styles.detailDescription}>{data.description}</AppText>
          <HTMLView source={data.content} />
          {dataChild.map((item, index) => {
            {
              /* const video = GET.getDataByParentId({
              name: DB_NAME.VIDEO,
              parent_id: item.id,
            }); */
            }
            return (
              <View key={`${index}${Math.random() * 10000}`}>
                <AppText style={{ ...STYLE_GLOBAL.title3, marginTop: 16 }}>
                  {index + 1}. {item.name}
                </AppText>
                <HTMLView source={item.content} />
                {/* <Video
                  source={{
                    uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  }}
                  poster={"https://baconmockup.com/300/200"}
                  posterResizeMode={"center"}
                  pictureInPicture={true}
                  paused={true}
                  controls={true}
                  resizeMode={"cover"}
                  style={{
                    flex: 1,
                    width: "100%",
                    height: 200,
                  }}
                /> */}
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              NavigationServices.navigate(SCENE_NAMES.CREATE_EXERCISE_SCREEN, {
                topic: data.name,
              })
            }
          >
            <SVG_NAME.PRACTICE />
            <AppText
              style={{
                color: COLOR.WHILE_0,
                ...STYLE_GLOBAL.body0,
                marginLeft: 8,
              }}
            >
              {t("button.doExercise")}
            </AppText>
          </TouchableOpacity>
        </View>
        {GET.getLessonTag(data.id).length > 0 && (
          <TopicRelate listTopic={GET.getLessonTag(data.id)} />
        )}
        <ArticleRelate />
        {/* <LectureRelate /> */}
        {/* <FormulaRelate /> */}
      </ScrollView>
    </AppContainer>
  );
}
