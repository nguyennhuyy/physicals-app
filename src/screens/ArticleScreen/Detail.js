import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import AppContainer from "components/AppContainer";
import AppTableOfContent from "components/AppTableOfContent";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import TopicRelate from "components/Relate/topic";
import ArticleRelate from "components/Relate/article";
import HTMLView from "components/HTMLView";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";

export default function DetailScreen({ route }) {
  const { data } = route.params;
  // const dataTopic = data.menu.split(";;") || [];
  return (
    <AppContainer title={data.title} back={true}>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16 }}>
          {/* <HTMLView source={data.title} /> */}
          <AppText style={styles.detailHeading}>{data.title}</AppText>
          <AppText style={styles.detailDescription}>{data.description}</AppText>
          {data.image_one !== null && data.image_one !== "" && (
            <AppImage source={data.image_one} style={styles.image} />
          )}
          <HTMLView source={data.content} />
        </View>
        {/* {dataTopic.length > 0 && <AppTableOfContent data={dataTopic} />} */}
        {GET.getArticleTag(data.id).length > 0 && (
          <TopicRelate listTopic={GET.getArticleTag(data.id)} />
        )}

        <ArticleRelate />
      </ScrollView>
    </AppContainer>
  );
}
