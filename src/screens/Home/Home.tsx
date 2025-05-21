import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getCities} from '../../api/city.api';

type TProps = {};

export const Home = (props: TProps) => {
  useEffect(() => {
    const fetchData = async () => {
      const results = await getCities();
      console.log('🚀 --- fetchData --- results:', results);
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
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
    fontSize: 16,
  },
});
