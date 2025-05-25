import {ScrollView, View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {styles} from './styles';
import {useController} from './controller';
import {WeatherDailyCard} from '../WeatherDailyCard';

export const WeatherDailySection = ({lat, lon, queryKey, city}: TProps) => {
  const {data} = useController({lat, lon, queryKey, city});

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{'5 Day Forecast'}</Text>
      <View style={styles.divider} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}>
        {data?.forecast.map((item, index) => {
          return (
            <WeatherDailyCard
              key={item.date}
              {...{
                index,
                date: item.date,
                minTemperature: item.minTemperature,
                maxTemperature: item.maxTemperature,
                icon: item.icon,
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
