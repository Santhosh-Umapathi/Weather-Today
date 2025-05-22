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
  Text,
  TWeatherDataCardProps,
  WeatherDailyCard,
  WeatherDailySection,
  WeatherDataCard,
} from '../../components';
import {formatDate, generateWeatherType, TWeatherType} from '../../helpers';
import {colors} from '../../tokens';
import LinearGradient from 'react-native-linear-gradient';

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

  const weatherIcon: {
    [key in TWeatherType]: React.ReactElement;
  } = {
    sunny: <Sunny width={230} height={230} />,
    cloudy: <Cloudy width={230} height={230} />,
    partialRain: <PartialRain width={230} height={230} />,
    partialSun: <PartialSun width={230} height={230} />,
    partialSunnyRain: <PartialSunnyRain width={230} height={230} />,
  };

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

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 24,
          }}>
          {weatherIcon[generateWeatherType(data?.current.main.id || 0)]}
          <View style={{marginLeft: 8}}>
            <Text
              style={{
                fontFamily: 'Inter-Regular',
                fontSize: 50,
                fontWeight: 'bold',
              }}>
              {data?.current.main.temperature.toFixed(0)}°C
            </Text>
            <Text
              style={{
                marginTop: 4,
              }}>
              {data?.current.main.weather}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            gap: 12,
            paddingHorizontal: 24,
          }}>
          {weatherData.map(item => (
            <WeatherDataCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
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
