import CodePush, { SyncOptions } from "react-native-code-push";
import React from "react";
import { t } from "i18next";
import { Alert, Dimensions, Platform, StyleSheet, View } from "react-native";
import { scalePortrait } from "./responsive";
import ImageLoad from "components/AppImage/ImageLoad";
import Text from "components/AppText";

const { width, height } = Dimensions.get("window");
let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const withCodePush = (WrappedComponent) => {
  console.log("============reunnnn============");
  class WrappedApp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isUpdate: false,
        totalBytes: 0,
        receivedBytes: 0,
        isLoad: false,
        downloading: false,
        installing: false,
        progress: null,
        syncMessage: t("codepush.msg_checking_new_app"),
      };
    }

    componentDidMount() {
      try {
        CodePush.checkForUpdate()
          .then((status) => {
            console.log("----status---", status);
            if (status) {
              const syncOption: SyncOptions = {
                deploymentKey:
                  Platform.OS == "android"
                    ? "gNV1guG8AoC4Z-WTMBIXhmnqGMb7GKpTfaEEi"
                    : "Rmop3SrX4NrDQ5YepOIUQpEkztkp0Y1U9MMMQ",
                installMode: CodePush.InstallMode.IMMEDIATE,
                updateDialog: {
                  title: t("codepush.title_update_new_path_version"),
                  optionalUpdateMessage: t(
                    "codepush.msg_update_new_path_version",
                    {
                      version: status.appVersion || "",
                      appSize: formatBytes(status.packageSize || 0),
                    }
                  )+`\n${t("codepush.note")} `+status.description,
                  optionalIgnoreButtonLabel: t("codepush.btn_stay"),
                  optionalInstallButtonLabel: t("codepush.btn_download"),
                },
              };

              CodePush.sync(
                syncOption,
                this.codePushStatusDidChange,
                this.codePushDownloadDidProgress
              );
            } else {
              console.log("App up to date.");
            }
          })
          .catch((err) => {
            console.log("Check update codepush error: ", err);
          });
      } catch (error) {}
    }

    codePushStatusDidChange = (syncStatus) => {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          this.setState({
            syncMessage: t("codepush.msg_checking_new_app"),
          });
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          this.setState({
            syncMessage: t("codepush.msg_downloading_path_update"),
            downloading: true,
          });

          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          this.setState({
            syncMessage: t("codepush.msg_awaiting_user_action"),
          });
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          this.setState({
            syncMessage: t("codepush.msg_installing_path_update"),
            installing: true,
          });
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          this.setState({
            syncMessage: "App up to date.",
          });
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          this.setState({
            syncMessage: "Cập nhật được huỷ bởi người dùng.",
            installing: false,
            downloading: false,
          });
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          this.setState({
            syncMessage: t("codepush.msg_installed_path_update"),
            installing: false,
            downloading: false,
          });
          Alert.alert(
            t("codepush.msg_installed_path_update"),
            t("codepush.msg_restart_app"),
            [
              {
                text: t("codepush.btn_restart"),
                style: "destructive",
                onPress: () => {
                  CodePush.allowRestart();
                },
              },
            ]
          );
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          this.setState({
            syncMessage: "An unknown error occurred.",
            installing: false,
            downloading: false,
          });
          break;
      }
    };

    codePushDownloadDidProgress = (progress) => {
      this.setState({
        progress: progress,
      });
    };

    render() {
      return (
        <React.Fragment>
          <WrappedComponent />
          {!this.state.downloading ? null : (
            <React.Fragment>
              <View
                style={{
                  ...styles.modalContainer,
                }}
              >
                <View
                  style={{
                    ...styles.modalContent,
                  }}
                >
                  <View
                    style={{
                      ...styles.modalHeader,
                    }}
                  >
                    <View
                      style={{
                        ...styles.logoContent,
                      }}
                    >
                      <ImageLoad
                        source={require("../assets/images/ic_launcher.png")}
                        style={{
                          width: scalePortrait(45),
                          height: scalePortrait(45),
                          borderRadius: scalePortrait(8),
                        }}
                        resizeMethod="auto"
                        resizeMode="contain"
                      />
                    </View>

                    <View style={{ width: scalePortrait(12) }} />

                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: scalePortrait(17),
                          fontWeight: "bold",
                        }}
                        numberOfLines={2}
                      >
                        Physical App
                      </Text>

                      <View style={{ height: scalePortrait(4) }} />

                      <Text
                        style={{
                          fontSize: scalePortrait(12),
                          fontWeight: "normal",
                          color: "#4D4F4E",
                        }}
                        numberOfLines={1}
                      >
                        {/* {Global.appVersion} */}
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      color: "#51B747",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {this.state.syncMessage}
                  </Text>

                  <Text
                    style={{
                      color: "#51B747",
                      marginTop: 12,
                    }}
                  >
                    {t("codepush.msg_process_download")}:{" "}
                    {formatBytes(this.state.progress?.receivedBytes || 0)}/
                    {formatBytes(this.state.progress?.totalBytes || 0)}
                  </Text>
                </View>
              </View>
            </React.Fragment>
          )}
        </React.Fragment>
      );
    }
  }

  return CodePush(codePushOptions)(WrappedApp);
};

export { withCodePush };

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: Number.MAX_SAFE_INTEGER,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  modalContent: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: width - scalePortrait(32),
    minHeight: scalePortrait(120),
    paddingVertical: scalePortrait(24),
    borderRadius: scalePortrait(12),
    zIndex: 1000,
    elevation: 10,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "#e0e0e0",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 4.14,
      },
    }),
  },
  modalHeader: {
    width: width - scalePortrait(32),
    flexDirection: "row",
    marginBottom: scalePortrait(30),
    alignItems: "center",
    paddingHorizontal: scalePortrait(12),
  },
  logoContent: {
    borderWidth: 1,
    borderColor: "#DBDCDC",
    borderRadius: scalePortrait(8),
  },
});