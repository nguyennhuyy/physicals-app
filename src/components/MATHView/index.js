import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MathJax from "react-native-mathjax";
import { replayContent } from "helpers/handleData";

const mmlOptions = {
  messageStyle: "none",
  extensions: [
    "mml2jax.js",
    "MathMenu.js",
    "MathZoom.js",
    "AssistiveMML.js",
    "a11y/accessibility-menu.js",
  ],
  jax: [
    "input/TeX",
    "output/HTML-CSS",
    "input/MathML",
    "input/mml",
    "input/AsciiMath",
  ],
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
  },
  TeX: {
    extensions: [
      "AMSmath.js",
      "AMSsymbols.js",
      "noErrors.js",
      "noUndefined.js",
    ],
  },
};
function MATHView({ formula }) {
  return (
    <MathJax
      mathJaxOptions={mmlOptions}
      resizeMode="contain"
      html={replayContent(formula)}
    />
  );
}

export default React.memo(MATHView);
