import React, { useRef, useState, useEffect, useMemo } from "react";
import HomeScreenView from "./view";
import database, { DB_NAME } from "../../data";
import APIUtils from "utils/apiUtils";
import { GET } from "data/helpers";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import { getSyncLevelSelector } from "appRedux/selectors/otherSelector";
// const data = database.objects(DB_NAME.QUESTION).slice(0, 5);
// .filtered(uuid="${report.uuid}");

const HomeScreen = ({ route }) => {
  const syncLevel = useSelectorShallow(getSyncLevelSelector);
  const [dataQuestion, setDataQuestion] = useState([]);
  const [dataFormula, setDataFormula] = useState([]);
  const [dataTopic, setDataTopic] = useState([]);
  const [dataArticle, setDataArticle] = useState([]);
  useEffect(() => {
    const question = GET.getDataOfPage({
      name: DB_NAME.QUESTION,
      limit: 5,
    });
    setDataQuestion(question);
    const topic = GET.getDataOfPage({
      name: DB_NAME.TAG,
      limit: 5,
      search: 'parent_id = "0"',
    });
    setDataTopic(topic);
    const article = GET.getArticleOfPage({
      // name: DB_NAME.ARTICLE,
      limit: 5,
    });
    setDataArticle(article);
    const formula = GET.getDataOfPage({
      name: DB_NAME.FORMULA,
      limit: 5,
    });
    setDataFormula(formula);
  }, []);
  return (
    <HomeScreenView
      formulaData={dataFormula}
      questionData={dataQuestion}
      topicData={dataTopic}
      articleData={dataArticle}
      route={route}
      syncLevel={syncLevel}
    />
  );
};

export default React.memo(HomeScreen);
