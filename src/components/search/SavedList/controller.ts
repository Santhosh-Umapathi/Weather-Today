import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWeatherStore} from '../../../store';
import {TController} from './types';
import {ViewStyle} from 'react-native';

export const useController = ({isInputFocused}: TController) => {
  const {bottom} = useSafeAreaInsets();
  const locations = useWeatherStore(store => store.locations);

  const paddingBottom = bottom + 24;
  const listStyle: ViewStyle = {
    transform: [{translateX: isInputFocused ? '-100%' : 0}],
  };

  return {paddingBottom, locations, listStyle};
};
