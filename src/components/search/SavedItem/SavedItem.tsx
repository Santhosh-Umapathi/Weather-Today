import {TouchableOpacity} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {CurrentWeather, MainWeather} from '../../weather';
import {useController} from './controller';

export const SavedItem = ({lat, lon}: TProps) => {
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
    </TouchableOpacity>
  );
};
