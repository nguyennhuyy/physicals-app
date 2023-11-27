import React, { Children } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppContainer from 'components/AppContainer';
import AppFlatList from 'components/AppFlatList';
import { IMG_NAME, SVG_NAME } from 'assets/path';
import { COLOR } from 'utils/AppConst';
import Item from './Item';
import styles from './styles';

export default function VariableScreen(props) {
  const { route, listVariable, refreshing, onRefresh, loadMore } = props;
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t('category.variable')} search={true} back={true}>
      <AppFlatList
        data={listVariable}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}
