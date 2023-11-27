import React, { useCallback, useState, useMemo, useEffect } from "react";
import { Image, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";
import Spinner from "react-native-loading-spinner-overlay";
import { COLOR } from "utils/AppConst";
import AppText from "../AppText";
import { handleImage } from "helpers/handleData";

function AppImage({ style, source, url, chilren, ...rest }) {
  source = handleImage(source);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const onLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);
  const sour = useMemo(() => source || { uri: url }, [source, url]);
  const onError = useCallback(() => {
    setIsError(true);
  }, []);

  useEffect(() => {
    setIsError(false);
    sour?.uri &&
      Image.prefetch(sour.uri).catch(() => {
        setIsError(true);
      });
  }, [sour]);

  const onLoadStart = useCallback(() => {
    setIsError(false);
    setIsLoading(true);
  }, []);

  if (isError) {
    return (
      <View
        // {...rest}
        style={[styles.container, styles.image, style]}
        // source={}
      >
        <AppText>Error</AppText>
      </View>
      // <AppText>Error</AppText>
    );
  }

  return (
    <>
      <FastImage
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        {...rest}
        style={[styles.container, style]}
        source={sour}
      >
        {isLoading && (
          <View style={[styles.container, style, styles.overlay]}>
            <Spinner color={COLOR.BLUE_1} />
          </View>
        )}
        {chilren}
      </FastImage>
    </>
  );
}

export default React.memo(AppImage);
