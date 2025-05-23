import React from 'react';
import {View, ScrollView} from 'react-native';
import {
  CurrentWeather,
  MainWeather,
  WeatherDailySection,
  WeatherDataCard,
} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {useController} from './controller';
import {TProps} from './types';
import {GRADIENT_CONFIG} from '../../config';

export const Home = (props: TProps) => {
  const {data, gradientColors, weatherData, contentContainerStyle, location} =
    useController();

  return (
    <LinearGradient
      style={styles.container}
      colors={gradientColors}
      start={GRADIENT_CONFIG.start}
      end={GRADIENT_CONFIG.end}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
        <MainWeather {...{name: data?.current.name}} />

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
            lat: location?.lat || undefined,
            lon: location?.lon || undefined,
          }}
        />
      </ScrollView>
    </LinearGradient>
  );
};
