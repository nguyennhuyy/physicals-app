import {API_URL} from '@env';

export const ENV_KEY = {
  PRODUCTION: 'PRODUCTION',
  DEVELOP: 'DEVELOPMENT',
};

const AppConfigs = {
  DEVELOPMENT: {
    // ENV_KEY: ENV_KEY.DEVELOP,
    API_URL,
  },
  PRODUCTION: {
    // ENV_KEY: ENV_KEY.PRODUCTION,
    API_URL,
  },
};

export default AppConfigs.DEVELOPMENT;
