/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import AppText from "components/AppText";
import { COLOR } from "utils/AppConst";
import styles from "./styles";
import { scalePortrait } from "utils/responsive";
import { SVG_NAME } from "assets/path";

function AppSelectMultiItem({
  value,
  placeholder,
  containerStyle,
  textInputStyle,
  keyboardType,
  error,
  messageError,
  hasShadow,
  label,
  onPressItem,
  styleViewInput,
  children,
  refCallback,
  options,
  nameParam,
  keyParam,
  itemNumberDisplayed = 3,
  isScrollOtp = true,
  dataSelected = [],
  zIndex = 1,
  ...otherProps
}) {
  const [focus, setFocus] = useState(false);
  const [openOptionsView, setOpenOptionsView] = useState(false);
  const [listSelect, setListSelect] = useState([...dataSelected]);

  useEffect(() => {
    onPressItem(listSelect);
  }, [listSelect]);

  const ItemView = ({ item, index }) => {
    const select = listSelect.some((val) => val[keyParam] === item[keyParam]);

    return (
      <TouchableOpacity
        onPress={() => {
          if (select) {
            setListSelect((old) =>
              old.filter((val) => val[keyParam] !== item[keyParam])
            );
          } else {
            setListSelect((old) => [...old, item]);
          }
        }}
        activeOpacity={1}
        style={[styles.optionsItem]}
      >
        <AppText style={styles.itemTxt}>
          {nameParam ? item[nameParam] : item}
        </AppText>
        <View style={styles.select}>
          {select ? <SVG_NAME.CHECK_ICON /> : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        zIndex: zIndex,
        paddingBottom: openOptionsView
          ? scalePortrait(45 * itemNumberDisplayed)
          : 0,
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setOpenOptionsView((old) => !old);
          setFocus((old) => !old);
        }}
        style={
          !focus
            ? [styles.container, containerStyle, hasShadow && styles.shadow]
            : [
                styles.container,
                containerStyle,
                hasShadow && styles.shadow,
                {
                  borderColor: COLOR.BLUE_1,
                  borderWidth: 2,
                },
              ]
        }
      >
        {error && <AppText style={styles.txtError}>{messageError}</AppText>}
        {label && <AppText style={styles.label}>{label}</AppText>}
        <View
          pointerEvents="none"
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: children ? scalePortrait(12) : 0,
              paddingRight: children ? scalePortrait(8) : 0,
              justifyContent: "space-between",
            },
            styleViewInput,
          ]}
        >
          <TextInput
            ellipsizeMode={"tail"}
            numberOfLines={1}
            placeholder={placeholder}
            selectTextOnFocus={false}
            editable={false}
            style={[
              styles.textInput,
              textInputStyle,
              {
                color: COLOR.BLACK_1,
              },
            ]}
            placeholderTextColor={COLOR.BLACK_1}
            value={value}
            keyboardType={keyboardType}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            autoCapitalize="none"
            textAlignVertical="center"
            includeFontPadding={false}
            blurOnSubmit={true}
            ref={refCallback}
            {...otherProps}
          />

          {children}
          <SVG_NAME.DOWN_ARROW style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      {openOptionsView && (
        <ScrollView
          scrollEnabled={isScrollOtp}
          pagingEnabled
          nestedScrollEnabled={true}
          style={[styles.optionsScrollView(itemNumberDisplayed)]}
        >
          {options.map((item, index) => (
            <ItemView item={item} key={index} index={index} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default React.memo(AppSelectMultiItem);
