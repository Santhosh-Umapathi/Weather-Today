import {View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {
  Cloudy,
  PartialRain,
  PartialSun,
  PartialSunnyRain,
  Sunny,
} from '../../icons';
import {styles} from './styles';
import {generateWeatherType, TWeatherType} from '../../../helpers';

const WEATHER_ICONS: {
  [key in TWeatherType]: React.ReactElement;
} = {
  sunny: <Sunny width={230} height={230} />,
  cloudy: <Cloudy width={230} height={230} />,
  partialRain: <PartialRain width={230} height={230} />,
  partialSun: <PartialSun width={230} height={230} />,
  partialSunnyRain: <PartialSunnyRain width={230} height={230} />,
};

export const CurrentWeather = ({temperature, weather, id}: TProps) => {
  return (
    <View style={styles.container}>
      {WEATHER_ICONS[generateWeatherType(id || 0)]}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {temperature && temperature.toFixed(0)}°C
        </Text>
        <Text style={styles.subText}>{weather}</Text>
      </View>
    </View>
  );
};
