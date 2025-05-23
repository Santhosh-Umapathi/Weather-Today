import {TouchableOpacity} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {CurrentWeather, MainWeather} from '../../weather';
import {useController} from './controller';
import {StarFilled} from '../../icons';

export const SavedItem = ({lat, lon, isPrimary = false}: TProps) => {
  const {data, goToSearchDetails} = useController({lat, lon});
  return (
    <TouchableOpacity onPress={goToSearchDetails} style={styles.container}>
      <MainWeather {...{name: data?.current.name}} canGoToSearch={false} />
      <CurrentWeather
        {...{
          id: data?.current.main.id,
          temperature: data?.current.main.temperature,
          weather: data?.current.main.weather,
          size: 130,
        }}
      />
      {isPrimary && <StarFilled />}
    </TouchableOpacity>
  );
};
