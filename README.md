# React Native Simple Dialogs

[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-simple-dialogs.svg)](https://www.npmjs.com/package/react-native-simple-dialogs)
[![npm downloads](https://img.shields.io/npm/dt/react-native-simple-dialogs.svg)](#install)

Cross-platform simple dialogs for React Native based on the Modal component. ⚛

## Features

- [Custom Dialog](#custom-dialog)
- [Confirm Dialog](#confirm-dialog)
- [Progress Dialog](#progress-dialog)

## Expo Snack
An
[Expo Demo Link](https://snack.expo.io/@incorelabs/react-native-simple-dialogs-example)

## Screenshots

| Android | iOS |
| - | - |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-dialog.png' width='320' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-dialog.png' width='320' /> |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-confirm.png' width='320' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-confirm.png' width='320' /> |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-progress.png' width='320' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-progress.png' width='320' /> |

## Requirements

- React Native >= 0.44.0

## NOTES

- for RN 0.58.0 or later use react-native-simple-dialogs@latest
- for RN 0.56.0 ... 0.57.8 use react-native-simple-dialogs@1.0.0
- for RN 0.44.0 ... 0.55.4, use react-native-simple-dialogs@0.3.1

## Install

```bash
  yarn add react-native-simple-dialogs
```
Or
```bash
  npm i -S react-native-simple-dialogs
```

## Use

### Custom Dialog

```jsx
import { Dialog } from 'react-native-simple-dialogs';

<Dialog
    visible={this.state.dialogVisible}
    title="Custom Dialog"
    onTouchOutside={() => this.setState({dialogVisible: false})} >
    <View>
        // your content here
    </View>
</Dialog>
```

#### Available props

| Name                        | Type                                                                                                | Default    | Description                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible                     | Boolean                                                                                             | false      | Show the modal?                                                                                                                                             |
| onRequestClose              | Function                                                                                            | null       | Callback that's called when users taps the hardware back button on Android                                                                                  |
| animationType               | Enum('none', 'slide', 'fade')                                                                       | 'none'     | Controls how the modal animates                                                                                                                             |
| onShow                      | Function                                                                                            | null       | Callback that's called once the modal has been shown                                                                                                        |
| onOrientationChange         | Function                                                                                            | null       | Callback that's called when the orientation change while the modal is being displayed on iOS                                                                |
| supportedOrientations       | Array of Enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right') | 'portrait' | Allowed orientation while modals is being shown. More info at [react-native docs](https://facebook.github.io/react-native/docs/modal#supportedorientations) |
| onTouchOutside              | Function                                                                                            | null       | Callbac that's called when users tap outside the shown modal                                                                                                |
| title                       | String                                                                                              | null       | Modal's title                                                                                                                                               |
| titleStyle                  | [Text StyleSheet](https://facebook.github.io/react-native/docs/text-style-props)                    | null       | Custom text style object for modal's title                                                                                                                  |
| dialogStyle                 | [View StyleSheet](https://facebook.github.io/react-native/docs/view-style-props)                    | null       | Custom view style for dialog box                                                                                                                            |
| contentStyle                | [View StyleSheet](https://facebook.github.io/react-native/docs/view-style-props)                    | null       | Custom view style for dialog content wrapper                                                                                                                |
| buttonsStyle                | [View StyleSheet](https://facebook.github.io/react-native/docs/view-style-props)                    | null       | Custom view style for dialog button wrapper                                                                                                                 |
| overlayStyle                | [View StyleSheet](https://facebook.github.io/react-native/docs/view-style-props)                    | null       | Custom view style for dialog overlay                                                                                                                        |
| buttons                     | React Component                                                                                     | null       | Modal button component                                                                                                                                      |
| keyboardDismissMode         | Enum('none', 'on-drag', 'interactive')                                                              | null       | [Determines whether the keyboard gets dismissed in response to a drag.](https://facebook.github.io/react-native/docs/scrollview#keyboarddismissmode)        |
| keyboardShouldPersistTaps   | Enum('always', 'never', 'handled', false, true)                                                     | null       | [Determines when the keyboard should stay visible after a tap.](https://facebook.github.io/react-native/docs/scrollview#keyboardshouldpersisttaps)          |

### Confirm Dialog

```jsx
import { ConfirmDialog } from 'react-native-simple-dialogs';

// with message
<ConfirmDialog
    title="Confirm Dialog"
    message="Are you sure about that?"
    visible={this.state.dialogVisible}
    onTouchOutside={() => this.setState({dialogVisible: false})}
    positiveButton={{
        title: "YES",
        onPress: () => alert("Yes touched!")
    }}
    negativeButton={{
        title: "NO",
        onPress: () => alert("No touched!")
    }}
/>

// with custom content
<ConfirmDialog
    title="Confirm Dialog"
    visible={this.state.dialogVisible}
    onTouchOutside={() => this.setState({dialogVisible: false})}
    positiveButton={{
        title: "OK",
        onPress: () => alert("Ok touched!")
    }} >
    <View>
        // your content here
    </View>
</ConfirmDialog>
```

#### Available props

| Name              | Type                                                                             | Default      | Description                                                                                   |
| ----------------- | -------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| ...{Dialog.props} | Dialog Props                                                                     | null         | Same props as Dialog Component                                                                |
| message           | String                                                                           | null         | Message shown in the confirm dialog                                                           |
| messageStyle      | [Text StyleSheet](https://facebook.github.io/react-native/docs/text-style-props) | null         | Custom text style for message                                                                 |
| negativeButton    | Button Props                                                                     | null         | Button element object to describe the negative button. See below for detailed shape of button |
| positiveButton    | Button Props                                                                     | **REQUIRED** | Button element object to describe the positive button. See below for detailed shape of button |

##### Button props

| Name       | Type                                                                             | Default      |
| ---------- | -------------------------------------------------------------------------------- | ------------ |
| title      | String                                                                           | **REQUIRED** |
| onPress    | Function                                                                         | **REQUIRED** |
| disabled   | Boolean                                                                          | null         |
| titleStyle | [Text StyleSheet](https://facebook.github.io/react-native/docs/text-style-props) | null         |
| style      | [View StyleSheet](https://facebook.github.io/react-native/docs/view-style-props) | null         |

### Progress Dialog

```jsx
import { ProgressDialog } from 'react-native-simple-dialogs';

<ProgressDialog
    visible={this.state.progressVisible}
    title="Progress Dialog"
    message="Please, wait..."
/>
```

#### Available props

| Name                   | Type                                                                             | Default      | Description                                             |
| ---------------------- | -------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------- |
| ...{Dialog.props}      | Dialog Props                                                                     | null         | Same props as Dialog Component                          |
| message                | String                                                                           | **REQUIRED** | Message shown in the progress dialog                    |
| messageStyle           | [Text StyleSheet](https://facebook.github.io/react-native/docs/text-style-props) | null         | Custom text style for message                           |
| activityIndicatorColor | color                                                                            | 'gray'       | The foreground color of the spinner                     |
| activityIndicatorSize  | enum('small', 'large'), number                                                   | 'small'      | Size of the indicator. Number only supported on Android |
| activityIndicatorStyle | [View StyleSheet](https://facebook.github.io/react-native/docs/view-style-props) | null         | Custom style for the activity indicator                 |

More info on the [sample project](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/Sample/src/App.js).

## Contribute

New features, bug fixes and improvements are welcome! For questions and suggestions use the [issues](https://github.com/douglasjunior/react-native-simple-dialogs/issues).

<a href="https://www.patreon.com/douglasjunior"><img src="http://i.imgur.com/xEO164Z.png" alt="Become a Patron!" width="200" /></a>
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E32BUP77SVBA2)

## Licence

```
The MIT License (MIT)

Copyright (c) 2017 Douglas Nassif Roma Junior
```

See the full [licence file](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/LICENSE).
