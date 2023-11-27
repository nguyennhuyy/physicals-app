import React, { useEffect, useState } from "react";
import TopicScreenView from "./view.js";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const TopicScreen = (props) => {
  const { route } = props;
  const [listTopic, setListTopic] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListTopic(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.TAG,
      page: page,
      limit: PAGE_SIZE,
      search: 'parent_id = "0"',
    };
    const newTopic = GET.getDataOfPage(options);
    if (page > 1) {
      setListTopic((old) => [...old, ...newTopic]);
    } else {
      setListTopic(() => [...newTopic]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListTopic();
  }

  function loadMore() {
    const length = listTopic.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListTopic(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListTopic();
  }, []);

  return (
    <TopicScreenView
      route={route}
      listTopic={listTopic}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(TopicScreen);
