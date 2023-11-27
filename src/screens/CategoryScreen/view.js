import React, { useEffect } from 'react';
import AppContainer from 'components/AppContainer';
import useTranslate from 'hooks/useTranslate';
import { View, ScrollView } from 'react-native';
import Item from './Item';
import styles from './styles';
import NavigationServices from 'navigation/navigationServices';

export default function CategoriesScreen({ listCategory, type = 'detail' }) {
  const { t, i18n } = useTranslate();
  return type === 'detail' ? (
    <AppContainer title={t('category.title')} back={true}>
      <View style={[styles.category, { flexWrap: 'wrap' }]}>
        {listCategory.map((item, index) => (
          <Item key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </AppContainer>
  ) : (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View style={[styles.category, { marginTop: -16 }]}>
        {listCategory.map((item, index) => (
          <Item key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
