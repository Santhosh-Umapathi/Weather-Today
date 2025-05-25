import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';

export const useSplash = () => {
  const hideSplash = async () => await BootSplash.hide({fade: true});

  useEffect(() => {
    hideSplash();
  }, []);
};
