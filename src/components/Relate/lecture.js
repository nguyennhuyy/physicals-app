import React from "react";
import { View } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import ItemLecture from "screens/LectureScreen/Item";
import lecture from "../../data/lesson.json";
const lectures = lecture.reverse().slice(0, 5);

export default function LectureRelate({}) {
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.lecture")} type={2} />
      <View style={{ padding: 16 }}>
        {lectures.map((item, index) => (
          <ItemLecture key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </View>
  );
}
