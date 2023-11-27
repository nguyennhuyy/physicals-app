import React from "react";
import { Platform, Linking, Alert } from "react-native";
import useTranslate from "hooks/useTranslate";

export const replaceAt = (string, index, replacement) => {
  if (index >= string.length) {
    return;
  }
  return string.substring(0, index) + replacement + string.substring(index + 1);
};

export const hidePhone = (phone) => {
  for (let i = 7; i < 10; i++) {
    phone = replaceAt(phone, i, "*");
  }
  return phone;
};

export const hideEmail = (email) => {
  for (let i = 7; i < 10; i++) {
    email = replaceAt(email, i, "*");
  }
  return email;
};

export const dateSelect = (date) => {
  const choseDate = new Date(date);
  const time = [
    choseDate.getDate() > 9 ? choseDate.getDate() : "0" + choseDate.getDate(),
    choseDate.getMonth() + 1 > 9
      ? choseDate.getMonth() + 1
      : "0" + (choseDate.getMonth() + 1),
    choseDate.getFullYear(),
  ].join("/");
  return time;
};

export const statusTransfer = (status) => {
  let nameStatus = "";
  let changeNameStatus = "";
  switch (status) {
    case "unfinished":
      nameStatus = "common:status.unfinished";
      changeNameStatus = "unfinished";
      break;
    case "finised":
      nameStatus = "common:status.finised";
      changeNameStatus = "finised";
      break;
    case "active":
      nameStatus = "common:status.active";
      changeNameStatus = "active";
      break;
    case "inactive":
      nameStatus = "common:status.inactive";
      changeNameStatus = "inactive";
      break;
    case "pending":
      nameStatus = "common:status.pending";
      changeNameStatus = "pending";
      break;
    case "updateProfile":
      nameStatus = "common:status.updateProfile";
      changeNameStatus = "updateProfile";
      break;
    default:
      break;
  }
  return { nameStatus, changeNameStatus };
};

export const onPressNumber = (number) => {
  let phoneNumber = "";
  console.log("number", number);
  if (!number && number?.length === 0) {
    Alert.alert("Chưa cập nhật số điện thoại");
    return;
  }
  if (Platform.OS === "android") {
    phoneNumber = `tel:${number.replace(/ /g, "")}`;
  } else {
    phoneNumber = `telprompt:${number.replace(/ /g, "")}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Số điện thoại không đúng");
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};

export const transferDate = (dataDate) => {
  var date = new Date(parseInt(dataDate, 10) * 1000);
  return dateSelect(date);
};

export const formatCurrency = (number, unit = "VNĐ") => {
  const negative = number < 0;
  const currency =
    Math.abs(number)
      .toString()
      .replace(/./g, (c, i, a) =>
        i > 0 && c !== "." && (a.length - i) % 3 === 0 ? `.${c}` : c
      ) + ` ${unit}`;
  return negative ? `-${currency}` : currency;
};
