import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Search, SearchDetails} from '../screens';
import {ROUTES} from '../const';
import {useLocation, useSplash} from '../hooks';
import {StatusBar} from 'react-native';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  useLocation();
  useSplash();

  // useEffect(() => {
  //   StatusBar.setTranslucent(true);
  // }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.SEARCH} component={Search} />
      <Stack.Screen name={ROUTES.SEARCH_DETAILS} component={SearchDetails} />
    </Stack.Navigator>
  );
};
