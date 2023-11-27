import React from "react";
import { View } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import ItemArticle from "screens/ArticleScreen/Item";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
import article from "data/article.json";
const articles = article.reverse().slice(0, 5);

const listArticle = GET.getArticleView();

export default function ArticleRelate({ text, title }) {
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.article")} type={2} />
      <View style={{ padding: 16, paddingBottom: 4 }}>
        {listArticle.map((item, index) => (
          <ItemArticle key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </View>
  );
}
