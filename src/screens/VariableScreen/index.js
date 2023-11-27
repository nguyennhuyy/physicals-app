import React, { useEffect, useState } from "react";
import VariableScreenView from "./view.js";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const VariableScreen = (props) => {
  const { route } = props;
  const [listVariable, setListVariable] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListVariable(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.VARIABLE,
      page: page,
      limit: PAGE_SIZE,
    };
    const newVariable = GET.getDataOfPage(options);
    if (page > 1) {
      setListVariable((old) => [...old, ...newVariable]);
    } else {
      setListVariable(() => [...newVariable]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListVariable();
  }

  function loadMore() {
    const length = listVariable.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListVariable(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListVariable();
  }, []);

  return (
    <VariableScreenView
      route={route}
      listVariable={listVariable}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(VariableScreen);
