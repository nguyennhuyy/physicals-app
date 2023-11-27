import React, { useEffect, useState } from "react";
import LectureScreenView from "./view";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
const PAGE_SIZE = 10;

const LectureScreen = (props) => {
  const { route } = props;
  const [listLecture, setListLecture] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  function FetchListLecture(page = 1) {
    setRefreshing(false);
    const options = {
      name: DB_NAME.LESSON,
      page: page,
      limit: PAGE_SIZE,
    };
    const newLecture = GET.getDataOfPage(options);
    if (page > 1) {
      setListLecture((old) => [...old, ...newLecture]);
    } else {
      setListLecture(() => [...newLecture]);
    }
  }
  function onRefresh() {
    setRefreshing(true);
    FetchListLecture();
  }

  function loadMore() {
    const length = listLecture.length;
    if (length < 30) {
      const pageNumber = Math.round(length / PAGE_SIZE);
      if (length === pageNumber * PAGE_SIZE) {
        FetchListLecture(pageNumber + 1);
      }
    }
  }
  useEffect(() => {
    FetchListLecture();
  }, []);

  return (
    <LectureScreenView
      route={route}
      listLecture={listLecture}
      refreshing={refreshing}
      onRefresh={onRefresh}
      loadMore={loadMore}
    />
  );
};

export default React.memo(LectureScreen);
