import React from 'react';
import {Text, WeatherScreen} from '../../components';

import {TProps} from './types';
import {useController} from './controller';
import {ActivityIndicator, View} from 'react-native';

export const Home = ({}: TProps) => {
  const {isRequestingPermissions, location} = useController();

  if (isRequestingPermissions) {
    <ActivityIndicator />;
  }

  if (!location) {
    return (
      <View>
        <Text>Location permission not given</Text>
      </View>
    );
  }

  return <WeatherScreen {...{...location}} />;
};
