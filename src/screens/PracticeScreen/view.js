import React, { Children } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppContainer from 'components/AppContainer';
import AppText from 'components/AppText';
import AppImage from 'components/AppImage';
import styles from './styles';
import { IMG_NAME, SVG_NAME } from 'assets/path';

const Item = ({ img, title }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <AppImage source={img} />
      <AppText style={styles.itemTitle}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default function PracticeScreen() {
  const { t, i18n } = useTranslate();
  const data = [
    {
      title: t('practice.title_1'),
      image: IMG_NAME.IMAGE_PRACTICE_1,
    },
    {
      title: t('practice.title_2'),
      image: IMG_NAME.IMAGE_PRACTICE_2,
    },
    {
      title: t('practice.title_2'),
      image: IMG_NAME.IMAGE_PRACTICE_3,
    },
  ];
  return (
    <AppContainer title={t('navigate:practice')}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.listArticle}>
            {data.map((item, index) => (
              <Item
                key={`${index}${Math.random() * 10000}`}
                img={item.image}
                title={item.title}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
}
