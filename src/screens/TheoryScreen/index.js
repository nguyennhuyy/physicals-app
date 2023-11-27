import React, { useEffect, useState } from "react";
import TheoryScreenView from "./view";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const TheoryScreen = (props) => {
  const { route } = props;
  const [listTheory, setListTheory] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListTheory(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.THEORY,
      page: page,
      limit: PAGE_SIZE,
    };
    const newTheory = GET.getDataOfPage(options);
    if (page > 1) {
      setListTheory((old) => [...old, ...newTheory]);
    } else {
      setListTheory(() => [...newTheory]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListTheory();
  }

  function loadMore() {
    const length = listTheory.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListTheory(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListTheory();
  }, []);

  return (
    <TheoryScreenView
      route={route}
      listTheory={listTheory}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(TheoryScreen);
