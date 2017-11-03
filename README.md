# React Native Simple Dialogs

[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-simple-dialogs.svg)](https://www.npmjs.com/package/react-native-simple-dialogs)
[![npm downloads](https://img.shields.io/npm/dt/react-native-simple-dialogs.svg)](#install)

Cross-platform simple dialogs for React Native based on the Modal component. ⚛

## Features

- [Custom Dialog](#custom-dialog)
- [Confirm Dialog](#confirm-dialog)
- [Progress Dialog](#progress-dialog)

## Requirements

- React Native >= 0.44.0

## Use

### Custom Dialog

| Android | iOS |
| - | - |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-dialog.png' width='240' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-dialog.png' width='240' /> |

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

### Confirm Dialog

| Android | iOS |
| - | - |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-confirm.png' width='240' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-confirm.png' width='240' /> |

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

### Progress Dialog

| Android | iOS |
| - | - |
| <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-progress.png' width='240' /> | <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-progress.png' width='240' /> |

```jsx
import { ProgressDialog } from 'react-native-simple-dialogs';

<ProgressDialog 
    visible={this.state.progressVisible} 
    title="Progress Dialog" 
    message="Please, wait..."
/>
```

More info on the [sample project](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/Sample/src/App.js).

## Install 

```bash
  npm i -S react-native-simple-dialogs
```

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
