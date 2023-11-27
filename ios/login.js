const UserModel = require("../../schemas/User");
const SettingModel = require("../../schemas/Setting");
const Fetch = require("../../../plugins/fetch");
const appleSigninAuth = require("apple-signin-auth");
const crypto = require("crypto");
class AuthController {
  static async loginFacebook(req, res) {
    let { access_token } = req.body;
    if (!access_token)
      return res.status(422).send({
        error: "access-token-is-require",
      });
    try {
      let data_facebook = await Fetch.get({
        path: `https://graph.facebook.com/me?fields=email,name,picture&access_token=${access_token}`,
      });
      if (!data_facebook.id)
        return res.status(422).send({
          error: "facebook-login-failed",
        });
      let user = await UserModel.findOne({
        $or: [
          { email: data_facebook.email },
          { uid: data_facebook.id, type_login: "facebook" },
        ],
      });
      //Tim user nay trong database de biet ton tai hay chua
      if (!user) {
        let user_data = {
          email: data_facebook.email || `${data_facebook.id}@gmail.com`,
          password: data_facebook.id,
          fullname: data_facebook.name,
          avatar: `https://graph.facebook.com/${data_facebook.id}/picture?type=large&redirect=true&width=300&height=300`,
          type_login: "facebook",
          uid: data_facebook.id,
        };
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
  static async loginApple(req, res) {
    let { data_login } = req.body;
    if (!data_login)
      return res.status(422).send({
        error: "data-login-is-require",
      });
    try {
      let data_apple = await appleSigninAuth.verifyIdToken(
        data_login.identityToken,
        {
          nonce: data_login.nonce
            ? crypto.createHash("sha256").update(data_login.nonce).digest("hex")
            : undefined,
        }
      );
      if (!data_apple.sub)
        return res.status(422).send({
          error: "apple-login-failed",
        });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
  static async loginGoogle(req, res) {
    let { access_token } = req.body;
    if (!access_token)
      return res.status(422).send({
        error: "access-token-is-require",
      });
    try {
      let data_google = await Fetch.get({
        path: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${access_token}`,
        credentials: "include",
      });
      if (!data_google.sub)
        return res.status(422).send({
          error: "google-login-failed",
        });
      let setting = await SettingModel.findOne({});
      let user = await UserModel.findOne({
        $or: [
          { email: data_google.email },
          { uid: data_google.sub, type_login: "google" },
        ],
      });
      let first_login = !user;
      if (!user) {
        let user_data = {
          email: data_google.email,
          password: data_google.sub,
          avatar: data_google.picture
            ? `${data_google.picture.split("=").slice(0, -1).join("")}=s300`
            : "",
          fullname: data_google.name || data_google.sub.slice(0, 10),
          type_login: "google",
          uid: data_google.sub,
          email_verified: true,
        };
      }
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
}
module.exports = AuthController;
