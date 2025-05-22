import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {getFullWeather} from '../../api';
import {useWeatherStore} from '../../store';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Cloudy,
  LocationAdd,
  PartialRain,
  PartialSun,
  PartialSunnyRain,
  Rain,
  Sunny,
  Umbrella,
  Wind,
} from '../../components/icons';
import {useNavigation} from '@react-navigation/native';
import {OPEN_WEATHER_URLS, ROUTES} from '../../const';
import {
  CurrentWeather,
  Text,
  TWeatherDataCardProps,
  WeatherDailyCard,
  WeatherDailySection,
  WeatherDataCard,
} from '../../components';
import {formatDate, generateWeatherType, TWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

type TProps = {};

export const Home = (props: TProps) => {
  const {top, bottom} = useSafeAreaInsets();
  const navigation = useNavigation();
  const location = useWeatherStore(store => store.location);

  const {data, isLoading, isError} = useQuery({
    enabled: !!location?.lat && !!location?.lon,
    queryKey: [JSON.stringify(location)],
    queryFn: () => getFullWeather({lat: location?.lat, lon: location?.lon}),
    staleTime: 60000 * 5, // 5 mins
    gcTime: 60000 * 10, // 10 mins
  });

  const gradientColors =
    colors.weatherColors[generateWeatherType(data?.current.main.id || 0)];

  const weatherData: TWeatherDataCardProps[] = [
    {
      icon: 'feelsLike',
      title: 'Feels Like',
      value: `${data?.current.main.feelsLike.toFixed(0)} °C`,
    },
    {
      icon: 'humidity',
      title: 'Humidity',
      value: `${data?.current.main.humidity.toFixed(0)} %`,
    },
    {
      icon: 'windSpeed',
      title: 'Wind Speed',
      value: `${data?.current.main.windSpeed.toFixed(0)} km/h`,
    },
  ];

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={gradientColors}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.75, y: 1.0}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingTop: top + 24,
          paddingBottom: bottom + 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 24,
          }}>
          <View>
            <Text style={{fontFamily: 'Inter-Regular', fontSize: 28}}>
              {data?.current.name}
            </Text>
            <Text
              style={{
                color: colors.gray,
                marginTop: 6,
              }}>
              {formatDate(new Date().toString())}
            </Text>
          </View>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              navigation.navigate(ROUTES.SEARCH);
            }}>
            <LocationAdd />
          </TouchableOpacity>
        </View>

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
