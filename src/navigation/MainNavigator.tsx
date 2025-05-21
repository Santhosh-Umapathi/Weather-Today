import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
