import React from 'react';
import {NoWeather, WeatherScreen} from '../../components';
import {TProps} from './types';
import {useController} from './controller';
import {ActivityIndicator} from 'react-native';

export const Home = ({}: TProps) => {
  const {isRequestingPermissions, location} = useController();

  if (isRequestingPermissions) {
    <ActivityIndicator />;
  }

  if (!location) {
    return <NoWeather />;
  }

  return <WeatherScreen {...{...location}} />;
};
