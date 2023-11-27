import i18n from 'i18next';

export function handleErrorMessage(err) {
  // const {t} = useTranslation();
  const {response} = err;
  if (response) {
    const {code, message, error} = response.data || {};
    if (message) {
      return {
        code: code,
        message: message,
        status: code,
      };
    }
    if (error && error.message) {
      console.log('response+++++', response);
      // if (code === 401 && err.name === 'UnauthorizedError') {
      //   return {
      //     code: code,
      //     message: error.message,
      //     status: 'EXP_TOKEN',
      //   };
      // }
      return {
        code: code || error.name,
        message: error.message,
        status: code || error.statusCode,
      };
    }
    return {
      code: code,
      message: i18n.t('message.ERROR_OCCURRED'),
      // message: 'ERROR_OCCURRED',
      status: code,
    };
  }
  const strMessage = err ? err.message : 'Error';
  return {
    code: err.code,
    message: strMessage,
    status: 0,
  };
}
