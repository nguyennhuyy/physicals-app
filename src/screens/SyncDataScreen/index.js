import React, { useCallback, useState, useEffect } from "react";
import SyncDataView from "./view";
import database, { DB_NAME } from "../../data";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import { useActions } from "hooks/useActions";
import { setSyncLevelSubmit } from "appRedux/actions/otherActions";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import { getSyncLevelSelector } from "appRedux/selectors/otherSelector";
import questionJson from "data/largeJson/question_data.json";
import articleJson from "data/largeJson/article_data.json";
import videoJson from "data/largeJson/video_data.json";
import variableJson from "data/largeJson/variable_data.json";
import formulaJson from "data/largeJson/formula_data.json";
import constantJson from "data/largeJson/constant_data.json";
import lessonJson from "data/largeJson/lesson_data.json";
import tagJson from "data/largeJson/tag_data.json";
import theoryJson from "data/largeJson/theory_data.json";
import formulaArticleJson from "data/largeJson/formula_article_data.json";
import formulaConstantJson from "data/largeJson/formula_constant_data.json";
import formulaTheoryJson from "data/largeJson/formula_theory_data.json";
import formulaVariableJson from "data/largeJson/formula_variable_data.json";
import questionChildJson from "data/largeJson/question_child_data.json";
import questionFormulaJson from "data/largeJson/question_formula_data.json";
import questionTheoryJson from "data/largeJson/question_theory_data.json";
import tagArticleJson from "data/largeJson/tag_article_data.json";
import tagFormulaJson from "data/largeJson/tag_formula_data.json";
import tagLessonJson from "data/largeJson/tag_lesson_data.json";
import tagQuestionJson from "data/largeJson/tag_question_data.json";
import tagTheoryJson from "data/largeJson/tag_theory_data.json";
import typePracticeJson from "data/largeJson/type_practice_data.json";
import NavigationServices from "navigation/navigationServices";
const dataLength = Object.keys(DB_NAME).length;

const SyncDataScreen = ({ route }) => {
  const syncLevel = useSelectorShallow(getSyncLevelSelector);
  const actions = useActions({
    setSyncLevelSubmit,
  });
  const handleSubmitSyncLevel = (opt) => {
    actions.setSyncLevelSubmit({ ...opt });
  };
  const [loading, setLoading] = useState(0);
  const [sync, setSync] = useState(false);
  const syncData = useCallback(({ name, json }) => {
    const data = database.objects(name);
    if (data.length < json.length) {
      const length = json.length;
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
    if (sync) {
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
    }
  }, [sync]);
  useEffect(() => {
    if (loading >= dataLength) {
      handleSubmitSyncLevel({ syncLevel: syncLevel + 1 });
      console.log(
        "===============================DONE SYNC DATA================================"
      );
      setTimeout(() => {
        NavigationServices.resetActionTo(SCENE_NAMES.ROOTS_SCREEN);
      }, 1000);
    }
  }, [loading]);
  return (
    <SyncDataView
      route={route}
      loading={loading}
      sync={sync}
      setSync={setSync}
    />
  );
};

export default React.memo(SyncDataScreen);
