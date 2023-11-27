import React, { Children } from 'react';
import AppContainer from 'components/AppContainer';
import useTranslate from 'hooks/useTranslate';
export default function ExerciseScreen() {
  const { t, i18n } = useTranslate();
  return <AppContainer title={t('exercise.title')} back={true}></AppContainer>;
}
