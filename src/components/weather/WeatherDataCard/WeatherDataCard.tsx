import {View} from 'react-native';
import {TIcons, TProps} from './types';
import {Text} from '../../Text';
import {Rain, Umbrella, Wind} from '../../icons';
import {styles} from './styles';

const ICONS: TIcons = {
  humidity: <Rain width={30} height={30} />,
  feelsLike: <Umbrella width={30} height={30} />,
  windSpeed: <Wind width={30} height={30} />,
};

export const WeatherDataCard = ({icon, title, value}: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconComponent}>
        <View style={styles.iconContainer}>{ICONS[icon]}</View>
        <Text>{title}</Text>
      </View>
      <Text>{value}</Text>
    </View>
  );
};
