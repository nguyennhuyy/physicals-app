import React, { useCallback, useState, useEffect } from "react";
import WellcomeView from "./view";
import database, { DB_NAME } from "../../data";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import { useActions } from "hooks/useActions";
import { setSyncLevelSubmit } from "appRedux/actions/otherActions";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import { getSyncLevelSelector } from "appRedux/selectors/otherSelector";
import questionJson from "data/question.json";
import articleJson from "data/article.json";
import videoJson from "data/video.json";
import variableJson from "data/variable.json";
import formulaJson from "data/formula.json";
import constantJson from "data/constant.json";
import lessonJson from "data/lesson.json";
import tagJson from "data/tag.json";
import theoryJson from "data/theory.json";
import formulaArticleJson from "data/formula_article.json";
import formulaConstantJson from "data/formula_constant.json";
import formulaTheoryJson from "data/formula_theory.json";
import formulaVariableJson from "data/formula_variable.json";
import questionChildJson from "data/question_child.json";
import questionFormulaJson from "data/question_formula.json";
import questionTheoryJson from "data/question_theory.json";
import tagArticleJson from "data/tag_article.json";
import tagFormulaJson from "data/tag_formula.json";
import tagLessonJson from "data/tag_lesson.json";
import tagQuestionJson from "data/tag_question.json";
import tagTheoryJson from "data/tag_theory.json";
import typePracticeJson from "data/type_practice.json";
import NavigationServices from "navigation/navigationServices";
const dataLength = Object.keys(DB_NAME).length;

const WellcomeScreen = ({ route }) => {
  const [loading, setLoading] = useState(0);
  const syncLevel = useSelectorShallow(getSyncLevelSelector);
  const actions = useActions({
    setSyncLevelSubmit,
  });
  const handleSubmitSyncLevel = (opt) => {
    actions.setSyncLevelSubmit({ ...opt });
  };
  const syncData = useCallback(({ name, json }) => {
    const data = database.objects(name);
    if (data.length < json.length) {
      const length = json.length;
      console.log(name, length);
      database.write(() => {
        let errorStatus = false;
        for (let i = 0; i < length; i++) {
          try {
            database.create(name, json[i]);
          } catch (error) {
            console.log("insert error" + i, error);
            errorStatus = true;
            break;
          }
        }
        console.log(`===========set loading DONE ${name}======= `, length);
        if (!errorStatus) {
          setLoading((old) => old + 1);
        }
      });
    }
  }, []);
  useEffect(() => {
    database.write(() => {
      database.deleteAll();
    });
    setTimeout(() => {
      syncData({
        name: DB_NAME.QUESTION,
        json: questionJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.ARTICLE,
        json: articleJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.VIDEO,
        json: videoJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.VARIABLE,
        json: variableJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.FORMULA,
        json: formulaJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.CONSTANT,
        json: constantJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.LESSON,
        json: lessonJson,
        syncLevel,
      });
      syncData({ setLoading, name: DB_NAME.TAG, json: tagJson, syncLevel });
      syncData({
        name: DB_NAME.THEORY,
        json: theoryJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.FORMULA_ARTICLE,
        json: formulaArticleJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.FORMULA_CONSTANT,
        json: formulaConstantJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.FORMULA_THEORY,
        json: formulaTheoryJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.FORMULA_VARIABLE,
        json: formulaVariableJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.QUESTION_CHILD,
        json: questionChildJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.QUESTION_FORMULA,
        json: questionFormulaJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.QUESTION_THEORY,
        json: questionTheoryJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.TAG_ARTICLE,
        json: tagArticleJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.TAG_FORMULA,
        json: tagFormulaJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.TAG_LESSON,
        json: tagLessonJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.TAG_QUESTION,
        json: tagQuestionJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.TAG_THEORY,
        json: tagTheoryJson,
        syncLevel,
      });
      syncData({
        name: DB_NAME.TYPE_PRACTICE,
        json: typePracticeJson,
        syncLevel,
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (loading >= dataLength) {
      handleSubmitSyncLevel({ syncLevel: syncLevel + 1 });
      console.log(
        "===============================DONE SYNC DATA================================"
      );
      setTimeout(() => {
        NavigationServices.resetActionTo(SCENE_NAMES.ROOTS_SCREEN);
      }, 10);
    }
  }, [loading]);
  return <WellcomeView route={route} loading={loading} />;
};

export default React.memo(WellcomeScreen);
