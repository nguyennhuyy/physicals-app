import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
import React, { useEffect, useState } from "react";
import ConstantScreenView from "./view.js";
const PAGE_SIZE = 10;
const ConstantScreen = (props) => {
  const { route } = props;
  const [listConstant, setListConstant] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListConstant(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.CONSTANT,
      page: page,
      limit: PAGE_SIZE,
    };
    const newConstant = GET.getDataOfPage(options);
    if (page > 1) {
      setListConstant((old) => [...old, ...newConstant]);
    } else {
      setListConstant(() => [...newConstant]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListConstant();
  }

  function loadMore() {
    const length = listConstant.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListConstant(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListConstant();
  }, []);
  return (
    <ConstantScreenView
      route={route}
      listConstant={listConstant}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(ConstantScreen);
