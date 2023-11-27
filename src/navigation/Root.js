import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationServices from "./navigationServices";
import HomeScreen from "screens/HomeScreen";
import WellcomeScreen from "screens/WellcomeScreen";
import ArticleScreen from "screens/ArticleScreen";
import DetailArticleScreen from "screens/ArticleScreen/Detail";
import PracticeScreen from "screens/PracticeScreen";
import RootScreen from "screens/RootScreen";
import AccountScreen from "screens/AccountScreen";
import ProfileScreen from "screens/ProfileScreen";
import UsScreen from "screens/AccountScreen/UsScreen";
import FacebookScreen from "screens/AccountScreen/FacebookScreen";
import UpdateProfileScreen from "screens/ProfileScreen/Update";
import LanguageScreen from "screens/AccountScreen/LanguageScreen";
import QuestionScreen from "screens/QuestionScreen";
import DetailQuestionScreen from "screens/QuestionScreen/Detail";
import TopicScreen from "screens/TopicScreen";
import DetailTopicScreen from "screens/TopicScreen/Detail";
import CategoriesScreen from "screens/CategoryScreen";
import FormulaScreen from "screens/FormulaScreen";
import DetailFormulaScreen from "screens/FormulaScreen/Detail";
import ConstantScreen from "screens/ConstantScreen";
import DetailConstantScreen from "screens/ConstantScreen/Detail";
import CreateExerciseScreen from "screens/ExerciseScreen/CreateExerciseScreen";
import ManageExerciseScreen from "screens/ExerciseScreen/ManageScreen";
import VariableScreen from "screens/VariableScreen";
import DetailVariableScreen from "screens/VariableScreen/Detail";
import AfterCreateExerciseScreen from "screens/ExerciseScreen/AfterCreateScreen";
import TestScreen from "screens/TestScreen";
import DoTestScreen from "screens/TestScreen/DoTest";
import DetailTestScreen from "screens/TestScreen/DetailTestScreen";
import CompleteTestScreen from "screens/TestScreen/Complete";
import ResultScreen from "screens/ResultScreen";
import DetailResultScreen from "screens/ResultScreen/Detail";
import LectureScreen from "screens/LectureScreen";
import DetailLectureScreen from "screens/LectureScreen/Detail";
import TheoryScreen from "screens/TheoryScreen";
import DetailTheoryScreen from "screens/TheoryScreen/Detail";
import SearchScreen from "screens/SearchScreen";
import { SCENE_NAMES } from "utils/AppConst";
import SyncDataScreen from "screens/SyncDataScreen";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import { getSyncLevelSelector } from "appRedux/selectors/otherSelector";
const Stack = createNativeStackNavigator();

function RootStack({ onNavigationStateChange }) {
  const syncLevel = useSelectorShallow(getSyncLevelSelector);
  return (
    <NavigationContainer
      onStateChange={onNavigationStateChange}
      ref={(navigatorRef) => {
        NavigationServices.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: { height: 0 },
          cardOverlayEnabled: true,
          headerBackTitle: null,
          headerTitleAlign: "center",
          headerTruncatedBackTitle: null,
          headerShown: false,
          animation: "slide_from_right",
        }}
        initialRouteName={
          syncLevel > 0 ? SCENE_NAMES.ROOTS_SCREEN : SCENE_NAMES.WELLCOME_SCREEN
        }
      >
        <Stack.Screen
          name={SCENE_NAMES.SYNC_DATA_SCREEN}
          component={SyncDataScreen}
        />

        <Stack.Screen name={SCENE_NAMES.ROOTS_SCREEN} component={RootScreen} />

        <Stack.Screen name={SCENE_NAMES.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={SCENE_NAMES.WELLCOME_SCREEN}
          component={WellcomeScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.ARTICLE_SCREEN}
          component={ArticleScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.DETAIL_ARTICLE_SCREEN}
          component={DetailArticleScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.PRACTICE_SCREEN}
          component={PracticeScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.ACCOUNT_SCREEN}
          component={AccountScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.LANGUAGE_SCREEN}
          component={LanguageScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        <Stack.Screen name={SCENE_NAMES.US_SCREEN} component={UsScreen} />
        <Stack.Screen
          name={SCENE_NAMES.FACEBOOK_SCREEN}
          component={FacebookScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.UPDATE_PROFILE_SCREEN}
          component={UpdateProfileScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.CATEGORIES_SCREEN}
          component={CategoriesScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.QUESTION_SCREEN}
          component={QuestionScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_QUESTION_SCREEN}
          component={DetailQuestionScreen}
        />

        <Stack.Screen name={SCENE_NAMES.TOPIC_SCREEN} component={TopicScreen} />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_TOPIC_SCREEN}
          component={DetailTopicScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.FORMULA_SCREEN}
          component={FormulaScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_FORMULA_SCREEN}
          component={DetailFormulaScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.CONSTANT_SCREEN}
          component={ConstantScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_CONSTANT_SCREEN}
          component={DetailConstantScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.LECTURE_SCREEN}
          component={LectureScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_LECTURE_SCREEN}
          component={DetailLectureScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.THEORY_SCREEN}
          component={TheoryScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_THEORY_SCREEN}
          component={DetailTheoryScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.CREATE_EXERCISE_SCREEN}
          component={CreateExerciseScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.COMPLETE_TEST_SCREEN}
          component={CompleteTestScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.VARIABLE_SCREEN}
          component={VariableScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.DETAIL_VARIABLE_SCREEN}
          component={DetailVariableScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.AFTER_CREATE_EXERCISE_SCREEN}
          component={AfterCreateExerciseScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.MANAGE_EXERCISE_SCREEN}
          component={ManageExerciseScreen}
        />

        <Stack.Screen name={SCENE_NAMES.TEST_SCREEN} component={TestScreen} />

        <Stack.Screen
          name={SCENE_NAMES.DO_TEST_SCREEN}
          component={DoTestScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.DETAIL_TEST_SCREEN}
          component={DetailTestScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.RESULT_SCREEN}
          component={ResultScreen}
        />

        <Stack.Screen
          name={SCENE_NAMES.DETAIL_RESULT_SCREEN}
          component={DetailResultScreen}
        />
        <Stack.Screen
          name={SCENE_NAMES.SEARCH_SCREEN}
          component={SearchScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
