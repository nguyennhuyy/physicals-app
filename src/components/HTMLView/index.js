import React from "react";
import { Linking, Dimensions, View } from "react-native";
import { COLOR } from "utils/AppConst";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import styles from "./styles";
import { replayContent } from "helpers/handleData";
import { scalePortrait } from "utils/responsive";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
const deviceWidth = Dimensions.get("window").width;
import MATHView from "components/MATHView";
import { checkContainFormula } from "helpers/handleData";
import STYLE_GLOBAL from "utils/StyleGlobal";

const CUSTOM_STYLES = {};
const CUSTOM_RENDERERS = {};
const DEFAULT_PROPS = {
  htmlStyles: CUSTOM_STYLES,
  renderers: CUSTOM_RENDERERS,
  ignoredStyles: ["transform"],
  debug: true,
};

const renderersProps = {
  img: {
    enableExperimentalPercentWidth: true,
  },
  a: {
    onPress(event, url, htmlAttribs, target) {
      Linking.openURL(url);
    },
  },
};

const systemFonts = [...defaultSystemFonts, "SVN-Sofia Pro"];

function HTMLView({ source, style, styleBox }) {
  const hasFormula = checkContainFormula(source);
  return (
    <View style={[{ flex: 1 }, styleBox]}>
      {hasFormula ? (
        <MATHView formula={source} />
      ) : (
        <RenderHtml
          {...DEFAULT_PROPS}
          contentWidth={deviceWidth}
          source={{
            html: `<head>
          <meta content="width=width, initial-scale=1, maximum-scale=1" name="viewport"></meta>
          <style> img { display: block; max-width: ${deviceWidth}px !important; height: auto; } </style>
        </head>  <body style="background-size:cover;">${replayContent(
          source
        )}</body>
      `,
          }}
          renderersProps={renderersProps}
          systemFonts={systemFonts}
          tagsStyles={{
            body: {
              width: 100 + "%",
            },
            h1: {
              color: COLOR.GRAY_1,
            },
            h2: {
              color: COLOR.GRAY_1,
            },
            h3: {
              color: COLOR.GRAY_1,
            },
            h4: {
              color: COLOR.GRAY_1,
            },
            p: {
              color: COLOR.GRAY_1,
              lineHeight: 20,
              margin: 0,
              ...STYLE_GLOBAL.body1,
              ...style,
            },
            div: {
              width: 100 + "%",
            },
            img: {
              display: "block",
              objectFit: "contain",
              width: 90 + "%",
              marginLeft: "auto",
              marginRight: "auto",
            },
          }}
        />
      )}
    </View>
  );
}

export default React.memo(HTMLView);
