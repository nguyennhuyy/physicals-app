import { OTHER } from "appRedux/actionsType";

export const getVersionSubmit = (payload) => ({
  type: OTHER.GET_APP_VERSION.HANDLER,
  payload,
});

export const getVersionSuccess = (payload) => ({
  type: OTHER.GET_APP_VERSION.SUCCESS,
  payload,
});

export const uploadFilesSubmit = (payload) => ({
  type: OTHER.UPLOAD_IMAGE.HANDLER,
  payload,
});

export const uploadFilesSuccess = (payload) => ({
  type: OTHER.UPLOAD_IMAGE.SUCCESS,
  payload,
});

export const getCountrySubmit = (payload) => ({
  type: OTHER.GET_COUNTRY.HANDLER,
  payload,
});

export const getCountrySuccess = (payload) => ({
  type: OTHER.GET_COUNTRY.SUCCESS,
  payload,
});

export const getCitySubmit = (payload) => ({
  type: OTHER.GET_CITY.HANDLER,
  payload,
});

export const getCitySuccess = (payload) => ({
  type: OTHER.GET_CITY.SUCCESS,
  payload,
});

export const uploadFileContactSubmit = (payload) => ({
  type: OTHER.UPLOAD_FILE_CONTACT.HANDLER,
  payload,
});

export const setFirstTimeUseApp = (payload) => ({
  type: OTHER.FIRST_TIME_USE_APP,
  payload,
});

export const getQRCodeSubmit = (payload) => ({
  type: OTHER.GET_QR_CODE.HANDLER,
  payload,
});

export const getQRProfileSubmit = (payload) => ({
  type: OTHER.GET_QR_PROFILE.HANDLER,
  payload,
});

export const getTourScheduleSubmit = (payload) => ({
  type: OTHER.GET_TOUR_SCHEDULE.HANDLER,
  payload,
});

export const getTourScheduleDetailSubmit = (payload) => ({
  type: OTHER.GET_TOUR_SCHEDULE_DETAIL.HANDLER,
  payload,
});

export const getGuideRatingDetailSubmit = (payload) => ({
  type: OTHER.GET_GUIDE_RATING_DETAIL.HANDLER,
  payload,
});

export const getListCompanySubmit = (payload) => ({
  type: OTHER.GET_LIST_COMPANY.HANDLER,
  payload,
});

export const getListCompanySuccess = (payload) => ({
  type: OTHER.GET_LIST_COMPANY.SUCCESS,
  payload,
});

export const getListCardIssuerSubmit = (payload) => ({
  type: OTHER.GET_LIST_CARD_ISSUER.HANDLER,
  payload,
});

export const getListCardIssuerSuccess = (payload) => ({
  type: OTHER.GET_LIST_CARD_ISSUER.SUCCESS,
  payload,
});

export const getListLanguageSubmit = (payload) => ({
  type: OTHER.GET_LIST_LANGUAGE.HANDLER,
  payload,
});

export const getListLanguageSuccess = (payload) => ({
  type: OTHER.GET_LIST_LANGUAGE.SUCCESS,
  payload,
});

export const getListNotifySubmit = (payload) => ({
  type: OTHER.GET_LIST_NOTIFY.HANDLER,
  payload,
});

export const readNotifySubmit = (payload) => ({
  type: OTHER.READ_NOTIFY.HANDLER,
  payload,
});

export const upLoadPhotoSubmit = (payload) => ({
  type: OTHER.UPLOAD_PHOTO.HANDLER,
  payload,
});

export const getQRCrgSubmit = (payload) => ({
  type: OTHER.GET_QR_CRG.HANDLER,
  payload,
});

export const getBadgeSubmit = () => ({
  type: OTHER.GET_COUNT_BADGE.HANDLER,
});

export const getBadgeSuccess = (payload) => ({
  type: OTHER.GET_COUNT_BADGE.SUCCESS,
  payload,
});

export const minusBadge = () => ({
  type: OTHER.MINUS_BADGE,
});

export const plusBadge = () => ({
  type: OTHER.PLUS_BADGE,
});

export const sendTokenFCMSubmit = (payload) => ({
  type: OTHER.SEND_TOKEN_FCM.HANDLER,
  payload,
});

export const getCardTypeSuccess = (payload) => ({
  type: OTHER.GET_CARD_TYPE.SUCCESS,
  payload,
});

export const signUpBusyScheduleSubmit = (payload) => ({
  type: OTHER.SIGNUP_BUSY_SCHEDULE.HANDLER,
  payload,
});

export const setSyncLevelSubmit = (payload) => ({
  type: OTHER.SET_SYNC_LEVEL.HANDLER,
  payload,
});

export const setListManageExerciseSubmit = (payload) => ({
  type: OTHER.SET_LIST_MANAGE_EXERCISE.HANDLER,
  payload,
});
