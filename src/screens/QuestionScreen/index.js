import React, { useEffect, useState } from "react";
import QuestionScreenView from "./view";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const QuestionScreen = (props) => {
  const { route } = props;
  const [listQuestion, setListQuestion] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListQuestion(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.QUESTION,
      page: page,
      limit: PAGE_SIZE,
    };
    const newQuestion = GET.getDataOfPage(options);
    if (page > 1) {
      setListQuestion((old) => [...old, ...newQuestion]);
    } else {
      setListQuestion(() => [...newQuestion]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListQuestion();
  }

  function loadMore() {
    const length = listQuestion.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListQuestion(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListQuestion();
  }, []);
  return (
    <QuestionScreenView
      route={route}
      listQuestion={listQuestion}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(QuestionScreen);
