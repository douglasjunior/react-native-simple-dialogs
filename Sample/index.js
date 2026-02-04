/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Root = () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
)

AppRegistry.registerComponent(appName, () => Root);
