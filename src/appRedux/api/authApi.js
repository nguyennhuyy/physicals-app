import utils from "utils/apiUtils";

export const signInApi = (email, userpass) => {
  return utils.post("guider/login", { email, userpass });
};
