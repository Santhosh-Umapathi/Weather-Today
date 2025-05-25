import React from 'react';
import {WeatherScreen} from '../../components';

import {TProps} from './types';
import {useController} from './controller';
import {ActivityIndicator} from 'react-native';

export const Home = (props: TProps) => {
  const {isRequestingPermissions, location} = useController();

  if (isRequestingPermissions) {
    <ActivityIndicator />;
  }

  return <WeatherScreen {...{...location}} />;
};
