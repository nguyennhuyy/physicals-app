import React, { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import moment from "moment";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import { IMG_NAME, SVG_NAME } from "assets/path";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppConfirm from "components/AppConfirm";
import AppTest from "components/AppTest";
import AppModal from "components/Modal/AppModal";
import AppModalDialog from "components/Modal/AppModalDialog";
import AppInputArea from "components/AppInputArea";
import NavigationServices from "navigation/navigationServices";
import HTMLView from "components/HTMLView";
import AppButton from "components/AppButton";
import { init } from "i18next";
const deviceWidth = Dimensions.get("window").width;

const ItemAnswer = (props) => {
  const { text, style, active, onPress } = props;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          ...STYLE_GLOBAL.shadowDefault,
          borderRadius: 16,
          marginBottom: 16,
        },
        style,
      ]}
      onPress={onPress}
    >
      {active ? <SVG_NAME.RADIO_ACTIVE /> : <SVG_NAME.RADIO_INACTIVE />}
      {text.includes("<p") ? (
        <HTMLView
          source={text}
          style={{ ...STYLE_GLOBAL.body0 }}
          styleBox={[
            { marginLeft: 8 },
            text.includes("<math") && { marginBottom: -10 },
          ]}
        />
      ) : (
        <AppText style={{ marginLeft: 8, ...STYLE_GLOBAL.body0 }}>
          {text}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

const ItemQuestion = (props) => {
  const {
    question,
    answerA,
    answerB,
    answerC,
    answerD,
    active,
    onPressSub,
    onPress,
    numberAnswer,
    next,
    setValue,
    selectAnswer,
    setSelectAnswer,
  } = props;
  const { t } = useTranslate();
  return (
    <View>
      {question && question.includes("<p") ? (
        <View>
          <AppText style={{ ...STYLE_GLOBAL.title2, marginBottom: 16 }}>
            {t("test.question") + " " + (+numberAnswer + 1) + ": "}
          </AppText>
          <HTMLView source={question} styleBox={{ marginBottom: 10 }} />
        </View>
      ) : (
        <View>
          <AppText style={{ ...STYLE_GLOBAL.title2, marginBottom: 16 }}>
            {t("test.question") + " " + (+numberAnswer + 1) + ": "}
          </AppText>
          <AppText style={{ ...STYLE_GLOBAL.body1, marginBottom: 16 }}>
            {question}
          </AppText>
        </View>
      )}
      {answerA && (
        <ItemAnswer
          text={answerA}
          onPress={() => {
            setSelectAnswer(answerA);
            setValue("A");
          }}
          active={selectAnswer === answerA}
        />
      )}
      {answerB && (
        <ItemAnswer
          text={answerB}
          onPress={() => {
            setSelectAnswer(answerB);
            setValue("B");
          }}
          active={selectAnswer === answerB}
        />
      )}
      {answerC && (
        <ItemAnswer
          text={answerC}
          onPress={() => {
            setSelectAnswer(answerC);
            setValue("C");
          }}
          active={selectAnswer === answerC}
        />
      )}
      {answerD && (
        <ItemAnswer
          text={answerD}
          onPress={() => {
            setSelectAnswer(answerD);
            setValue("D");
          }}
          active={selectAnswer === answerD}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <AppButton
          disable={!active}
          text={t("button.return")}
          color={active ? COLOR.YELLOW_0 : COLOR.GRAY_5}
          bgc={active ? COLOR.YELLOW_0_1 : COLOR.BACK_GROUND_0}
          style={{ paddingVertical: 8 }}
          onPress={() => {
            setSelectAnswer("");
            setValue("");
            onPressSub();
          }}
        />
        {next && (
          <AppButton
            text={t("button.nextTo")}
            color={COLOR.WHILE_0}
            bgc={COLOR.YELLOW_0}
            style={{ paddingVertical: 8 }}
            onPress={() => {
              setSelectAnswer("");
              setValue("");
              onPress();
            }}
          />
        )}
      </View>
    </View>
  );
};

const countQuestionNotSelect = (data) => {
  return data.filter((item) => !item.value).length;
};

const initTableData = (questionsData) => {
  return questionsData.map((item, index) => {
    return {
      selectAnswer: "",
      id: item.id,
      numberAnswer: +index + 1,
      value: "",
      result: item.correct_answer,
      question: item,
    };
  });
};
const changeTableData = (tableData, dataUpdate, numberAnswer) => {
  tableData[numberAnswer] = { ...tableData[numberAnswer], ...dataUpdate };
  return tableData;
};

function DoTest({ route }) {
  const { t, i18n } = useTranslate();
  const { questionsData, dataRow: dataRowTemp, submitData } = route.params;
  const [tableData, setTableData] = useState(initTableData(questionsData));
  const [dataAnswer, setDataAnswer] = useState(questionsData[0]);
  const [numberAnswer, setNumberAnswer] = useState(0);
  const [showModalComplete, setShowModalComplete] = useState(false);
  const [showModalClose, setShowModalClose] = useState(false);
  const [showModalReload, setShowModalReload] = useState(false);
  const [showModalReport, setShowModalReport] = useState(false);
  const [showModalNeedLogin, setShowModalNeedLogin] = useState(false);
  const [showModalResult, setShowModalResult] = useState(false);
  const [messageReport, setMessageReport] = useState("");
  const [value, setValue] = useState(tableData[numberAnswer].value);
  const [selectAnswer, setSelectAnswer] = useState(
    tableData[numberAnswer].selectAnswer
  );
  const checkNumberQuestionTrue = tableData.filter(
    (item) => item.value === item.result
  ).length;

  const checkPoint = Number(
    (+checkNumberQuestionTrue / questionsData.length) * 10
  ).toFixed(2);
  const dataRow = [
    ...dataRowTemp,
    {
      title: t("test.correct_number"),
      text:
        `${checkNumberQuestionTrue}/${questionsData.length}` +
        t("result.sentence"),
    },
    {
      title: t("test.time"),
      text: moment().format("L"),
    },
    {
      title: t("test.score"),
      text: `${checkPoint}${t("result.point")}`,
    },
  ];

  // countdown time
  const [time, setTime] = useState(+submitData.workTime * 60);
  const timerRef = useRef(time);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    let timerId = setInterval(() => {
      timerRef.current -= 1;
      if (completed || timerRef.current < 0) {
        clearInterval(timerId);
        NavigationServices.navigate(SCENE_NAMES.COMPLETE_TEST_SCREEN, {
          tableData,
          dataRow,
        });
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  useEffect(() => {
    setDataAnswer(questionsData[numberAnswer]);
    setValue(tableData[numberAnswer].value);
    setSelectAnswer(tableData[numberAnswer].selectAnswer);
  }, [numberAnswer]);
  useEffect(() => {
    if (value !== tableData[numberAnswer].value)
      setTableData(
        changeTableData(tableData, { value, selectAnswer }, numberAnswer)
      );
  }, [value, selectAnswer]);

  return (
    <>
      <AppContainer
        title={`${Math.floor(time / 60)}:${
          time % 60 < 10 ? "0" + (time % 60) : time % 60
        }`}
        close={true}
        reload={true}
        menu={true}
        test={true}
        onReload={() => setShowModalReload(true)}
        onClose={() => {
          setShowModalClose(true);
        }}
        onMenu={() => setShowModalResult(true)}
      >
        <ScrollView
          style={[styles.container, { backgroundColor: COLOR.WHILE_0 }]}
        >
          <View style={styles.content}>
            <ItemQuestion
              next={numberAnswer < questionsData.length - 1}
              active={numberAnswer > 0}
              question={dataAnswer.content}
              answerA={dataAnswer.answer_a}
              answerB={dataAnswer.answer_b}
              answerC={dataAnswer.answer_c}
              answerD={dataAnswer.answer_d}
              numberAnswer={numberAnswer}
              result={dataAnswer.correct_answer}
              setValue={setValue}
              selectAnswer={selectAnswer}
              setSelectAnswer={setSelectAnswer}
              onPress={() => {
                setNumberAnswer(numberAnswer + 1);
              }}
              onPressSub={() => {
                setNumberAnswer(numberAnswer - 1);
              }}
            />
          </View>
        </ScrollView>

        <AppConfirm
          // quotes={true}
          confirmText={t("button.submit")}
          cancel={false}
          onPress={() => {
            setShowModalComplete(true);
          }}
          // onReport={() => setShowModalReport(true)}
        />
      </AppContainer>
      <AppModalDialog
        showModalDialog={showModalClose}
        setShowModalDialog={setShowModalClose}
        titleConfirm={t("button.agree")}
        titleCancel={t("button.close")}
        onUpdate={() => {
          setShowModalClose(false);
          setCompleted(true);
          NavigationServices.navigate(SCENE_NAMES.COMPLETE_TEST_SCREEN, {
            tableData,
            dataRow,
          });
        }}
      >
        {countQuestionNotSelect(tableData) > 0 ? (
          <AppText style={styles.text}>
            {t("test.confirm_1")}
            <AppText style={styles.highlight}>
              {countQuestionNotSelect(tableData)}
            </AppText>{" "}
            {t("test.confirm_2")}
          </AppText>
        ) : (
          <AppText style={styles.text}> {t("test.confirm_5")}</AppText>
        )}
      </AppModalDialog>
      <AppModalDialog
        showModalDialog={showModalComplete}
        setShowModalDialog={setShowModalComplete}
        titleConfirm={t("button.agree")}
        titleCancel={t("button.close")}
        onUpdate={() => {
          setShowModalComplete(false);
          setCompleted(true);
          NavigationServices.navigate(SCENE_NAMES.COMPLETE_TEST_SCREEN, {
            tableData,
            dataRow,
          });
        }}
      >
        {countQuestionNotSelect(tableData) > 0 ? (
          <AppText style={styles.text}>
            {t("test.confirm_1")}
            <AppText style={styles.highlight}>
              {countQuestionNotSelect(tableData)}
            </AppText>{" "}
            {t("test.confirm_3")}
          </AppText>
        ) : (
          <AppText style={styles.text}> {t("test.confirm_4")}</AppText>
        )}
      </AppModalDialog>
      <AppModalDialog
        showModalDialog={showModalReload}
        setShowModalDialog={setShowModalReload}
        titleConfirm={t("button.redo")}
        titleCancel={t("button.close")}
        onUpdate={() => {
          setDataAnswer(questionsData[0]);
          setNumberAnswer(0);
          setTableData(initTableData(questionsData));
          timerRef.current = +submitData.workTime * 60;
          setShowModalReload(false);
        }}
      >
        <AppText style={styles.text}>{t("test.redo")}</AppText>
      </AppModalDialog>
      <AppModal
        showAppModal={showModalReport}
        setShowAppModal={setShowModalReport}
        titleModal={t("test.report")}
        closeModal={true}
      >
        <View style={styles.notify_test}>
          <AppText>{t("test.notify")}</AppText>
        </View>
        <AppInputArea
          style={{ marginHorizontal: 16 }}
          label={t("test.message")}
          height={110}
          value={messageReport}
          onChangeText={setMessageReport}
        />
        <AppConfirm
          confirmText={t("button.send")}
          cancel={false}
          onPress={() => {
            setShowModalReport(false);
            setShowModalNeedLogin(true);
          }}
        />
      </AppModal>
      <AppModal
        showAppModal={showModalResult}
        setShowAppModal={setShowModalResult}
        titleModal={t("test.question")}
        closeModal={true}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItem: "center",
            padding: 16,
          }}
        >
          {tableData.map((item, index) => (
            <TouchableOpacity
              key={`${index}${Math.random() * 10000}`}
              onPress={() => {
                setNumberAnswer(index);
                setShowModalResult(false);
              }}
            >
              <AppText
                style={{
                  width: (deviceWidth - 32) / 4,
                  ...STYLE_GLOBAL.body1,
                  ...STYLE_GLOBAL.weight500,
                  color: item.value ? COLOR.GREEN_0 : COLOR.GRAY_4,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                {item.numberAnswer}
                {"-"}
                {item.value !== "" ? item.value : ""}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>
      </AppModal>
      <AppModalDialog
        showModalDialog={showModalNeedLogin}
        setShowModalDialog={setShowModalNeedLogin}
        titleConfirm={t("button.agree")}
        titleCancel={t("button.close")}
        onUpdate={() => {
          setShowModalNeedLogin(false);
        }}
      >
        <AppText style={styles.text}>{t("test.login_report")}</AppText>
      </AppModalDialog>
    </>
  );
}

export default DoTest;
