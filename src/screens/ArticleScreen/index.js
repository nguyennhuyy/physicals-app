import React, { useState, useEffect } from "react";
import ArticleScreenView from "./view";
import useTranslate from "hooks/useTranslate";
import database, { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const ArticleScreen = (props) => {
  const { route } = props;
  const { t, i18n } = useTranslate();
  const listTopic = [
    {
      id: 0,
      text: t("article.topic.latest"),
      tag: "",
    },
    {
      id: 1,
      text: t("article.topic.jokes"),
      tag: "449",
    },
    {
      id: 2,
      text: t("article.topic.history"),
      tag: "450",
    },
    {
      id: 3,
      text: t("article.topic.synthesis"),
      tag: "445",
    },
    { id: 4, text: t("article.topic.life"), tag: "464" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [listArticle, setListArticle] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  function FetchListArticle(page = 1) {
    setRefreshing(false);
    const options = {
      page: page,
      limit: PAGE_SIZE,
    };
    const newArticle = GET.getArticleOfPage(options);
    if (page > 1) {
      setListArticle((old) => [...old, ...newArticle]);
    } else {
      setListArticle(() => [...newArticle]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListArticle();
  }

  function loadMore() {
    const length = listArticle.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListArticle(pageNumber + 1);
      }
    }
  }

  useEffect(() => {
    FetchListArticle();
  }, []);

  useEffect(() => {
    activeTab === 0
      ? setListArticle(
          GET.getArticleOfPage({
            name: DB_NAME.ARTICLE,
            page: 1,
            limit: PAGE_SIZE,
          })
        )
      : setListArticle(
          GET.getArticleOfPage({
            name: DB_NAME.ARTICLE,
            page: 1,
            limit: PAGE_SIZE,
            search: `main_tag_id="${listTopic[activeTab].tag}"`,
          })
        );
  }, [activeTab]);
  //api

  return (
    <ArticleScreenView
      route={route}
      listTopic={listTopic}
      listArticle={listArticle}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
};

export default React.memo(ArticleScreen);
