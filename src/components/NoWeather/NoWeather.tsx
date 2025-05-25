import React from 'react';
import {Text} from '../../components';
import {useController} from './controller';
import {TouchableOpacity, View} from 'react-native';
import {PartialSunnyRain, SearchIcon} from '../../components/icons';
import {styles} from './styles';

export const NoWeather = () => {
  const {goToSearch, openSettings} = useController();
  return (
    <View style={styles.container}>
      <PartialSunnyRain width={150} height={150} />
      <Text style={styles.mainText}>Location permission not given!</Text>

      <TouchableOpacity onPress={goToSearch} style={styles.searchContainer}>
        <Text>Search for a city</Text>

        <SearchIcon />
      </TouchableOpacity>

      <Text>Or</Text>

      <TouchableOpacity
        style={styles.permissionContainer}
        onPress={openSettings}>
        <Text style={styles.text}>Grant Permissions</Text>
      </TouchableOpacity>
    </View>
  );
};
