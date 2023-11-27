import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppContainer from 'components/AppContainer';
import AppText from 'components/AppText';
import AppImage from 'components/AppImage';
import styles from './styles';

export default function AccountScreen({ route }) {
  const { t, i18n } = useTranslate();
  const { profile } = route.params;

  return (
    <AppContainer back={true}>
      <View style={styles.header}>
        <AppImage source={profile.avatar} style={styles.avatar} />
      </View>
      <ScrollView style={[styles.container]}>
        <View style={styles.content}>
          <View style={styles.information}>
            <AppText style={styles.name}>{profile.name}</AppText>
            <AppText style={styles.subscribe}>{t('profile.subscribe')}</AppText>
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
}
