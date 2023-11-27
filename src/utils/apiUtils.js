import axios from "axios";

const REQUEST_TIMEOUT = 60000;
const API_URL = "https://guidata.oneguide.com.vn/api";
console.log("API_URL", API_URL);

export default class APIUtils {
  accessTokenUser = "";
  currentLanguage = "";
  static setAccessToken(token) {
    this.accessTokenUser = token;
    console.log("token", token);
  }
  static changeCurrentLanguage(value = "vn") {
    this.currentLanguage = value;
    console.log("currentLanguage", value);
  }

  static getAccessToken() {
    return this.accessTokenUser;
  }

  static get(path, params, headers) {
    console.log(">>>>>Request---->>>>>params", { path, params });
    return new Promise((resolve, reject) =>
      axios
        .get(`${API_URL}/${path}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer c87a8db0272d006c3b59922b9957af0d",
            ...headers,
          },
          params,
        })
        .then((response) => {
          console.log(">>>>>>> Response>>>>>> : " + path + ":", response);
          const { data } = response;
          resolve(data);
        })
        .catch((err) => {
          console.log("[error]", { err });
          reject(err);
        })
    );
  }

  static post(path, postData, headers) {
    return new Promise((resolve, reject) => {
      console.log("guide_id:", this.accessTokenUser);
      console.log(">>>>>>> Request post>>>>>> : ", path, postData);
      axios
        .post(
          `${API_URL}/${path}`,
          { guide_id: this.accessTokenUser, ...postData },
          {
            timeout: REQUEST_TIMEOUT,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Accept-Language": !this.currentLanguage
                ? "vn"
                : this.currentLanguage,
              Authorization: "Bearer c87a8db0272d006c3b59922b9957af0d",
              ...headers,
            },
          }
        )
        .then((response) => {
          console.log(">>>>>>> Response>>>>>> : ", path, response);
          const { data } = response;
          resolve(data);
        })
        .catch((err) => {
          console.log("[error]", { err });
          reject(err);
        });
    });
  }

  static uploadFile(path, file, name, headers) {
    var fd = new FormData();
    console.log("file", file);
    var newFile = {
      ...file,
      name: file.filename || file.fileName || "my_photo.jpg",
      type: file.type || "image/jpeg",
    };
    fd.append(name, newFile);

    fd.append("guide_id", this.accessTokenUser);

    console.log(">>>>>>> Request post>>>>>> : ", path, file);
    console.log(">>>>>>> Request post>>>>>> : ", path, fd);
    return new Promise((resolve, reject) =>
      axios
        .post(`${API_URL}/${path}`, fd, {
          Accept: "application/json",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer c87a8db0272d006c3b59922b9957af0d",
            ...headers,
          },
        })
        .then((response) => {
          console.log(">>>>>>> Response>>>>>> : ", response);
          const { data } = response;
          resolve(data);
        })
        .catch((err) => {
          console.log("[error]", { err });
          reject(err);
        })
    );
  }
}
