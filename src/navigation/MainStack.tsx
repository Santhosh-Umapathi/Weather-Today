import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Search, SearchDetails} from '../screens';
import {ROUTES} from '../const';
import {useLocation, useSplash} from '../hooks';
import {TCoordinates} from '../dto';

type TRouteKeys = (typeof ROUTES)[keyof typeof ROUTES];

export type TMainStackParamList = {
  [k in TRouteKeys]: k extends typeof ROUTES.SEARCH_DETAILS
    ? Partial<TCoordinates> & {city?: string}
    : undefined;
};

const Stack = createNativeStackNavigator<TMainStackParamList>();

export const MainStack = () => {
  useLocation();
  useSplash();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.SEARCH} component={Search} />
      <Stack.Screen name={ROUTES.SEARCH_DETAILS} component={SearchDetails} />
    </Stack.Navigator>
  );
};
