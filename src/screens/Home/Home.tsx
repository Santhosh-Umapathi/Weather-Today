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
  PartialSunnyRain,
  Rain,
} from '../../components/icons';
import {useNavigation} from '@react-navigation/native';
import {OPEN_WEATHER_URLS, ROUTES} from '../../const';
import {Text} from '../../components';
import {formatDate} from '../../helpers';
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
  });

  console.log('data', data);
  console.log('isLoading', isLoading);
  console.log('isError', isError);

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#FEE3BC', '#F39876']}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.75, y: 1.0}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: bottom,
          paddingHorizontal: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
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
          }}>
          <PartialSunnyRain width={230} height={230} />
          <View style={{marginLeft: 8}}>
            <Text
              style={{
                fontFamily: 'Inter-Regular',
                fontSize: 32,
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
      </ScrollView>
    </LinearGradient>
  );
};

{
  /* <Image
            source={{
              uri: `${OPEN_WEATHER_URLS.icon}/${data?.current.main.icon}@2x.png`,
              width: 200,
              height: 200,
            }}
            width={200}
            height={200}
            resizeMode="contain"
            style={{
              width: 200,
              height: 200,
            }}
          /> */
}
