import {Image, View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {styles} from './styles';
import {useController} from './controller';

const IMAGE_SIZE = 60;

export const WeatherDailyCard = ({
  date,
  minTemperature,
  maxTemperature,
  index,
  icon,
}: TProps) => {
  const {isFirstItem, label, minMax, iconUrl, style} = useController({
    index,
    date,
    maxTemperature,
    minTemperature,
    icon,
  });

  return (
    <View style={[styles.container, style]}>
      {isFirstItem && <View style={styles.handle} />}
      <Text>{label}</Text>
      <Image
        source={{
          uri: iconUrl,
        }}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        resizeMode="contain"
      />
      <Text>{minMax}</Text>
    </View>
  );
};
