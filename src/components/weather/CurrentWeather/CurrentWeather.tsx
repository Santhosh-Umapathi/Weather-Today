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

//TODO: Move to helpers
const generateWeatherIcons = (type: TWeatherType, size = 230) => {
  const WEATHER_ICONS: {
    [key in TWeatherType]: React.ReactElement;
  } = {
    sunny: <Sunny width={size} height={size} />,
    cloudy: <Cloudy width={size} height={size} />,
    partialRain: <PartialRain width={size} height={size} />,
    partialSun: <PartialSun width={size} height={size} />,
    partialSunnyRain: <PartialSunnyRain width={size} height={size} />,
  };

  return WEATHER_ICONS[type];
};

export const CurrentWeather = ({temperature, weather, id, size}: TProps) => {
  return (
    <View style={styles.container}>
      {generateWeatherIcons(generateWeatherType(id || 0), size)}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {temperature && temperature.toFixed(0)}°C
        </Text>
        <Text style={styles.subText}>{weather}</Text>
      </View>
    </View>
  );
};
