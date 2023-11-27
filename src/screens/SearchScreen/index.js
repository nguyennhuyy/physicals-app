import React, { useEffect, useState, useCallback } from "react";
import useTranslate from "hooks/useTranslate";
import SearchScreenView from "./view";
import FormulaTab from "./tabs/formula";
import TopicTab from "./tabs/topic";
import LectureTab from "./tabs/lecture";
import QuestionTab from "./tabs/question";
import VariableTab from "./tabs/variable";
import TheoryTab from "./tabs/theory";
import ConstantTab from "./tabs/constant";
import database, { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
import { IMG_NAME, SVG_NAME } from "assets/path";
const PAGE_SIZE = 10;
const SearchScreen = (props) => {
  const { route } = props;
  const { t, i18n } = useTranslate();
  const listCategory = [
    {
      id: 0,
      text: t("category.formula"),
      db_name: DB_NAME.FORMULA,
      screen: FormulaTab,
    },
    {
      id: 1,
      text: t("category.constant"),
      db_name: DB_NAME.CONSTANT,
      screen: ConstantTab,
    },
    // {
    //   id: 2,
    //   text: t("category.lecture"),
    //   db_name: DB_NAME.LESSON,
    //   screen: LectureTab,
    // },
    {
      id: 3,
      text: t("category.variable"),
      db_name: DB_NAME.VARIABLE,
      screen: VariableTab,
    },
    {
      id: 4,
      text: t("category.theory"),
      db_name: DB_NAME.THEORY,
      screen: TheoryTab,
    },
    {
      id: 5,
      text: t("category.question"),
      db_name: DB_NAME.QUESTION,
      screen: QuestionTab,
    },
    {
      id: 6,
      text: t("category.topic"),
      db_name: DB_NAME.TAG,
      screen: TopicTab,
    },
  ];
  const [listData, setListData] = useState([]);
  let title = route.params ? route.params.title : "";
  const [activeTab, setActiveTab] = useState(
    title ? listCategory.find((item) => item.text == title).id : 0
  );
  const [refreshing, setRefreshing] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [typeQuestion, setTypeQuestion] = useState([
    { text: t("exercise.essay"), active: false },
    { text: t("exercise.multiple_choice"), active: false },
  ]);
  const [levelDifficult, setLevelDifficult] = useState([
    { text: t("exercise.easy"), active: false },
    { text: t("exercise.medium"), active: false },
    { text: t("exercise.hard"), active: false },
  ]);
  const [quantityFilter, setQuantityFilter] = useState(0);
  const resetFilter = () => {
    setTypeQuestion(
      typeQuestion.map((data) => {
        data.active = false;
        return data;
      })
    );
    setLevelDifficult(
      levelDifficult.map((data) => {
        data.active = false;
        return data;
      })
    );
  };

  function FetchListData(page = 1) {
    setRefreshing(false);
    const options = {
      name: listCategory[activeTab].db_name,
      page: page,
      limit: PAGE_SIZE,
      search: valueSearch
        ? `(name CONTAINS[c] "${valueSearch}" || name_search CONTAINS[c] "${valueSearch}")`
        : "",
    };
    const newData = GET.getDataOfPage(options);
    if (page > 1) {
      setListData((old) => [...old, ...newData]);
    } else {
      setListData(() => [...newData]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListData();
  }

  function loadMore() {
    const length = listData.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListData(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    ScreenActive = listCategory[activeTab].screen;
    FetchListData();
    setValueSearch("");
  }, [activeTab]);
  useEffect(() => {
    valueSearch === "" &&
      setListData(
        GET.getDataOfPage({
          name: listCategory[activeTab].db_name,
          page: 1,
          limit: PAGE_SIZE,
        })
      );
  }, [valueSearch]);

  const onSearch = () => {
    setListData(
      GET.getDataOfPage({
        name: listCategory[activeTab].db_name,
        page: 1,
        limit: PAGE_SIZE,
        search: `(name CONTAINS[c] "${valueSearch}" || name_search CONTAINS[c] "${valueSearch}")`,
      })
    );
  };

  let ScreenActive = listCategory[activeTab].screen;
  return (
    <SearchScreenView
      route={route}
      listCategory={listCategory}
      resetFilter={resetFilter}
      onRefresh={onRefresh}
      refreshing={refreshing}
      loadMore={loadMore}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      ScreenActive={ScreenActive}
      quantityFilter={quantityFilter}
      setQuantityFilter={setQuantityFilter}
      valueSearch={valueSearch}
      setValueSearch={setValueSearch}
      showModalFilter={showModalFilter}
      setShowModalFilter={setShowModalFilter}
      listData={listData}
      typeQuestion={typeQuestion}
      setTypeQuestion={setTypeQuestion}
      levelDifficult={levelDifficult}
      setLevelDifficult={setLevelDifficult}
      onSearch={onSearch}
    />
  );
};

export default React.memo(SearchScreen);
