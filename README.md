# React Native Simple Dialogs

[![Licence MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-native-simple-dialogs.svg)](https://www.npmjs.com/package/react-native-simple-dialogs)
[![npm downloads](https://img.shields.io/npm/dt/react-native-simple-dialogs.svg)](#install)

Corssplatform simple dialogs for React Native based on the Modal component. ⚛

## Demo

### Android
<img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-dialog.png' width='250' /> <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/android-progress.png' width='250' />

### iOS
<img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-dialog.png' width='250' /> <img src='https://raw.githubusercontent.com/douglasjunior/react-native-simple-dialogs/master/screenshots/ios-progress.png' width='250' />

## Requirements

- React Native >= 0.40.0

## Use

### Dialog

```jsx
import { Dialog } from 'react-native-simple-dialogs';

<Dialog 
    visible={this.state.dialogVisible} 
    title="Dialog Title"
    onTouchOutside={() => this.setState({dialogVisible: false})} >
    <View>
        // your content here
    </View>
</Dialog>
```

### ProgressDialog

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

## Donate

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZJ6TCL3EVUDDL)


## Licence

```
The MIT License (MIT)

Copyright (c) 2017 Douglas Nassif Roma Junior
```

See the full [licence file](https://github.com/douglasjunior/react-native-simple-dialogs/blob/master/LICENSE).
