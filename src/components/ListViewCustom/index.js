import React, {Fragment} from 'react';
import {View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
// import EmptyData from 'components/Empty/EmptyData';
import styles from './styles';

export default function ListViewCustom(props) {
  const {
    data,
    renderItem,
    style,
    // ListEmptyComponent = <EmptyData style={styles.empty} />,
    ItemSeparatorComponent,
    keyExtractor = (item, index) => (item.id || index).toString(),
    scrollEnable = false,
  } = props;
  // if (data.length <= 0) {
  //   return ListEmptyComponent;
  // }
  const Container = scrollEnable ? ScrollView : View;
  return (
    <Container style={style}>
      {data.map((value, index) => {
        if (typeof ItemSeparatorComponent === 'function') {
          return (
            <Fragment key={keyExtractor(value, index)}>
              {ItemSeparatorComponent()}
              {renderItem({item: value, index})}
            </Fragment>
          );
        }
        return renderItem({item: value, index});
      })}
    </Container>
  );
}
