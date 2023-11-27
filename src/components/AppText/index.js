import React, { useMemo } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { mapPropsToFontStyle } from './styles';
import STYLE_GLOBAL from 'utils/StyleGlobal';

const AppText = (props) => {
  const { style, required = false } = props;
  const stylesFont = useMemo(
    () => [mapPropsToFontStyle(props), style],
    [props, style]
  );
  return (
    <Text {...props} style={stylesFont}>
      {props.children || ''}
      {required && <Text style={styles.required}>*</Text>}
    </Text>
  );
};

AppText.propTypes = {
  numberOfLines: PropTypes.number,
};

AppText.defaultProps = {};

export default React.memo(AppText);

const styles = StyleSheet.create({
  required: {
    ...STYLE_GLOBAL.body1,
    lineHeight: 21,
    color: '#DA294A',
  },
});
// cach dung:
//     - frontWeight: <400 -> light
//     - frontWeight: =400 -> regular (default)
//     - frontWeight: =500 -> medium
//     - frontWeight: >=600 -> bold

// nen set style global h1, h2,...
