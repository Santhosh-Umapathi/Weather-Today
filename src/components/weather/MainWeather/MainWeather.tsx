import {TouchableOpacity, View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {styles} from './styles';
import {LocationAdd} from '../../icons';
import {useController} from './controller';

export const MainWeather = ({name, canGoToSearch}: TProps) => {
  const {date, goToSearch} = useController();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {canGoToSearch && (
        <TouchableOpacity onPress={goToSearch}>
          <LocationAdd />
        </TouchableOpacity>
      )}
    </View>
  );
};
