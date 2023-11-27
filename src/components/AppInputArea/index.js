import { Animated, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import { FONT_FAMILY } from 'components/AppText/appFont';

function AppTextArea({
  onChangeText,
  value,
  placeholder,
  style,
  disable,
  styleContent,
  keyboardType,
  error,
  messageError,
  password,
  autoCapitalize,
  height,
  label,
  maxLength,
  focus,
  capitalize,
  important,
  onPressFiled,
  children,
  ...props
}) {
  const familyDefault = 'regular';

  const moveText = useRef(new Animated.Value(0)).current;
  const focusInput = useRef();

  useEffect(() => {
    if (value !== '') {
      moveTextTop();
    } else if (value === '') {
      moveTextBottom();
    }
    if (focus) {
      focusInput.current.focus();
    }
  }, [focus, moveTextBottom, moveTextTop, value]);

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (!value) {
      moveTextBottom();
    }
  };

  const moveTextTop = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [moveText]);

  const moveTextBottom = useCallback(() => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [moveText]);

  const aniLabel = {
    fontSize: moveText.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        focusInput.current.focus();
        onPressFiled ? onPressFiled() : {};
      }}
      style={[styleContent, styles.margin]}
    >
      <View
        style={[
          styles.view,
          style,
          {
            borderColor: error ? COLOR.RED_1 : COLOR.BORDER_0,
            height: height ? height : 80,
          },
        ]}
      >
        <Animated.Text
          style={[
            aniLabel,
            {
              color: COLOR.GRAY_2,
              fontFamily: FONT_FAMILY[`${familyDefault.toUpperCase()}`],
            },
            styles.animatedStyle,
          ]}
        >
          {label}{' '}
          {important && (
            <Animated.Text
              style={[
                aniLabel,
                {
                  color: COLOR.RED_3,
                  fontFamily: FONT_FAMILY[`${familyDefault.toUpperCase()}`],
                },
                styles.animatedStyle,
              ]}
            >
              *
            </Animated.Text>
          )}
        </Animated.Text>
        {maxLength && (
          <Animated.Text
            style={[
              {
                color: COLOR.GRAY_2,
                fontFamily: FONT_FAMILY[`${familyDefault.toUpperCase()}`],
              },
              styles.countStyle,
              { top: label ? 7 : 0 },
            ]}
          >
            {`${value.length}/${maxLength}`}
          </Animated.Text>
        )}

        <TextInput
          {...props}
          editable={disable}
          ref={focusInput}
          multiline
          style={[
            label ? styles.textInput : styles.inputNotLabel,
            { fontFamily: FONT_FAMILY[`${familyDefault.toUpperCase()}`] },
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLOR.GRAY_2}
          autoCapitalize={autoCapitalize ? autoCapitalize : 'sentences'}
          notUnderLine
          keyboardType={keyboardType}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          maxLength={maxLength ? maxLength : 300}
        />
      </View>
      {error && <AppText style={styles.txtError}>{messageError}</AppText>}
      {children}
    </TouchableOpacity>
  );
}

export default React.memo(AppTextArea);
