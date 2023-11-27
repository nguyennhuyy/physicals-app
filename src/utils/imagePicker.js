import * as ImagePicker from 'react-native-image-picker';
import {Platform} from 'react-native';

const configOptions =
  Platform.OS === 'ios'
    ? {
        storageOptions: {
          skipBackup: true,
          cameraRoll: true,
          path: '',
          waitUntilSaved: true,
        },
      }
    : {};

export const openCamera = callback => {
  ImagePicker.launchCamera(
    {
      quality: 1,
      fixOrientation: true,
      noData: true,
      mediaType: 'Photo',
      cameraType: 'back',
      saveToPhotos: true,
      maxWidth: 1000,
      maxHeight: 1000,
      ...configOptions,
    },
    response => {
      console.log('response openCamera:', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        callback('User cancelled image picker', null);
      } else if (response.error) {
        callback(response.error, null);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        console.log('takePhoto>>>>', response);
        // callback(null, {...response, data: null});
      }
    },
  );
};

export const onImageLibraryPress = callback => {
  ImagePicker.launchImageLibrary(
    {
      quality: 1,
      selectionLimit: 1,
      fixOrientation: true,
      noData: true,
      mediaType: 'Photo',
      cameraType: 'back',
      saveToPhotos: true,
      maxWidth: 1000,
      maxHeight: 1000,
      includeBase64: false,
      ...configOptions,
    },
    response => {
      console.log('response: onImageLibraryPress:', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        callback('User cancelled image picker', null);
      } else if (response.error) {
        callback(response.error, null);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const uri =
        //   Platform.OS === 'android'
        //     ? response.assets[0].uri
        //     : response.assets[0].uri.replace('file://', '');
        // uri:
        //   Platform.OS === 'android'
        //     ? response.uri
        //     : response.uri.replace('file://', ''),
        // };
        // setImageSource(source.uri);
        // console.log('libraryPhoto>>>>', response);
        callback(null, {...response, data: null});
      }
    },
  );
};
