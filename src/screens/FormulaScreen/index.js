import React, { useEffect, useState } from "react";
import FormulaScreenView from "./view.js";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const FormulaScreen = (props) => {
  const { route } = props;
  const [listFormula, setListFormula] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListFormula(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.FORMULA,
      page: page,
      limit: PAGE_SIZE,
    };
    const newFormula = GET.getDataOfPage(options);
    if (page > 1) {
      setListFormula((old) => [...old, ...newFormula]);
    } else {
      setListFormula(() => [...newFormula]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListFormula();
  }

  function loadMore() {
    const length = listFormula.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListFormula(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListFormula();
  }, []);
  //api

  return (
    <FormulaScreenView
      route={route}
      listFormula={listFormula}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(FormulaScreen);
