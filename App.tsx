
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/reduxToolKit/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const App: React.FC = () => {
  return (

      <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>

  );
};

const styles = StyleSheet.create({

});

export default App;
