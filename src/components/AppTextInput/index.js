import {
  Animated,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles";
import AppText from "../AppText";
import { FONT_FAMILY } from "../AppText/appFont";
import { SVG_NAME } from "assets/path";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";

function AppTextInput({
  onChangeText,
  value,
  style,
  styleContent,
  keyboardType,
  error,
  messageError,
  password,
  autoCapitalize,
  height,
  label,
  capitalize,
  maxLength,
  important,
  iconRight,
  onEndEditing,
  onPressFiled,
  uppercase,
  onBlurFunc = () => {},
  autoFocus = false,
  styleIconRight,
  ...props
}) {
  const familyDefault = "regular";

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const moveText = useRef(new Animated.Value(0)).current;
  const focusInput = useRef();

  useEffect(() => {
    if (autoFocus) {
      focusInput.current.focus();
    }
  }, []);

  useEffect(() => {
    if (value !== "") {
      moveTextTop();
    } else if (value === "") {
      moveTextBottom();
    }
  }, [moveTextBottom, moveTextTop, value]);

  const onFocusHandler = () => {
    if (value !== "") {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (value === "") {
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
    transform: [
      {
        translateY: moveText.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -10],
        }),
      },
    ],
    fontSize: moveText.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 9],
    }),
  };

  const aniInput = {
    transform: [
      {
        translateY: moveText.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 8],
        }),
      },
    ],
  };

  function ControlSecureTextEntry({ data }) {
    if (data === true) {
      return (
        <TouchableOpacity
          style={styles.icRight}
          onPress={() => setSecureTextEntry(false)}
        >
          <SVG_NAME.HIDE_PASSWORD />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.icRight}
          onPress={() => setSecureTextEntry(true)}
        >
          <SVG_NAME.SHOW_PASSWORD />
        </TouchableOpacity>
      );
    }
  }

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
            borderColor: error ? COLOR.RED_0 : COLOR.BORDER_0,
            height: height ? height : 50,
          },
        ]}
      >
        <Animated.Text
          numberOfLines={1}
          style={[
            aniLabel,
            uppercase && { textTransform: "uppercase" },
            {
              color: COLOR.GRAY_4,
              fontFamily: FONT_FAMILY[`${familyDefault.toUpperCase()}`],
            },
            styles.animatedStyle,
          ]}
        >
          {label}
          {important && (
            <Animated.Text
              numberOfLines={1}
              style={[
                aniLabel,
                {
                  color: COLOR.RED_0,
                  fontFamily: FONT_FAMILY[`${familyDefault.toUpperCase()}`],
                },
                styles.animatedStyle,
              ]}
            >
              {" "}
              *
            </Animated.Text>
          )}
        </Animated.Text>
        <Animated.View style={aniInput}>
          <TextInput
            {...props}
            ref={focusInput}
            style={[STYLE_GLOBAL.body1, styles.textInput]}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={COLOR.GRAY_1}
            autoCapitalize={autoCapitalize ? autoCapitalize : "sentences"}
            notUnderLine
            keyboardType={keyboardType}
            secureTextEntry={password ? secureTextEntry : false}
            onFocus={onFocusHandler}
            onBlur={() => {
              onBlurHandler();
              onBlurFunc();
            }}
            textContentType={"oneTimeCode"}
            maxLength={maxLength}
            onEndEditing={onEndEditing}
          />
        </Animated.View>
        {!password ? (
          value === "" ? (
            <></>
          ) : (
            <></>
          )
        ) : (
          <ControlSecureTextEntry data={secureTextEntry} />
        )}
      </View>
      {iconRight && iconRight}
      {error && <AppText style={styles.txtError}>{messageError}</AppText>}
    </TouchableOpacity>
  );
}

export default React.memo(AppTextInput);
