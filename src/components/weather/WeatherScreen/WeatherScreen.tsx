import React from 'react';
import {View, ScrollView} from 'react-native';
import {
  CurrentWeather,
  MainWeather,
  WeatherDailySection,
  WeatherDataCard,
} from '../';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {useController} from './controller';
import {TProps} from './types';
import {GRADIENT_CONFIG} from '../../../config';
import {NavBackButton} from '../../NavBackButton';

export const WeatherScreen = ({}: TProps) => {
  const {
    data,
    gradientColors,
    weatherData,
    contentContainerStyle,
    location,
    canGoToSearch,
    routeParamCity,
    queryKey,
  } = useController();

  return (
    <LinearGradient
      style={styles.container}
      colors={gradientColors}
      start={GRADIENT_CONFIG.start}
      end={GRADIENT_CONFIG.end}>
      {!canGoToSearch && (
        <View
          style={[
            styles.navContainer,
            {paddingTop: contentContainerStyle.paddingTop},
          ]}>
          <NavBackButton />
        </View>
      )}
      <ScrollView
        contentContainerStyle={{
          paddingTop: canGoToSearch ? contentContainerStyle.paddingTop : 0,
          paddingBottom: contentContainerStyle.paddingBottom,
        }}>
        <MainWeather
          {...{
            name: routeParamCity || data?.current.name,
            canGoToSearch,
            showActions: !canGoToSearch,
          }}
        />

        <CurrentWeather
          {...{
            id: data?.current.main.id,
            temperature: data?.current.main.temperature,
            weather: data?.current.main.weather,
          }}
        />

        <View style={styles.weatherDataSection}>
          {weatherData.map(({icon, title, value}) => (
            <WeatherDataCard
              key={title}
              {...{
                icon,
                title,
                value,
              }}
            />
          ))}
        </View>

        <WeatherDailySection
          {...{
            lat: location?.lat,
            lon: location?.lon,
            city: routeParamCity,
            queryKey,
          }}
        />
      </ScrollView>
    </LinearGradient>
  );
};
