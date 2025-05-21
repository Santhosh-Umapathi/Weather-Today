import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {
  Cloudy,
  PartialRain,
  PartialSun,
  PartialSunnyRain,
  Sunny,
} from './components/icons';

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
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello ABC Font</Text>
      <Text style={{fontFamily: 'Inter-Regular', fontSize: 20}}>
        Hello ABC Font
      </Text>
      <Cloudy width={50} height={50} />
      <PartialRain width={50} height={50} />
      <PartialSun width={50} height={50} />
      <PartialSunnyRain width={50} height={50} />
      <Sunny width={50} height={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
