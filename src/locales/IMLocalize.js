import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RNLocalize from "react-native-localize";

import en from "./translations/en";
import vi from "./translations/vi";

const LANGUAGES = {
  en,
  vi,
};

const LANG_CODES = Object.keys(LANGUAGES);
console.log("LANG_CODES", LANG_CODES);
const locales = RNLocalize.getLocales();
console.log(locales);
const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    AsyncStorage.getItem("user-language", (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log("Error fetching Languages from asyncstorage ", err);
        } else {
          console.log(
            "No language is set, choosing language of machine as fallback"
          );
        }
        // const findBestAvailableLanguage =
        //   RNLocalize.findBestAvailableLanguage(LANG_CODES);

        // callback(findBestAvailableLanguage.languageTag || 'vi');
        if (
          (Array.isArray(locales) && locales[0].languageCode === "en") ||
          locales[0].languageCode === "vi"
        ) {
          callback(locales[0].languageCode);
        } else callback("vi");
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: (language) => {
    AsyncStorage.setItem("user-language", language);
    console.log("user-language", language);
  },
};

i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    compatibilityJSON: "v3", //fix compatibilityJSON v3 format handling
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
  });
