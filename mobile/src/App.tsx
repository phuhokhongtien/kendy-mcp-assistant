import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import './locales';
import RootNavigator from './navigation/RootNavigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
      <RootNavigator />
    </>
  );
};

export default App;
