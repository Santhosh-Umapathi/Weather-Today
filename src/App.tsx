import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';

import {MainNavigator} from './navigation/MainNavigator';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return <MainNavigator />;
};

export default App;
