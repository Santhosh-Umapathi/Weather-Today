import {TouchableOpacity, View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {styles} from './styles';
import {SearchIcon} from '../../icons';
import {useController} from './controller';

export const MainWeather = ({name, canGoToSearch, id}: TProps) => {
  const {date, goToSearch} = useController({id});
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {canGoToSearch && (
        <TouchableOpacity onPress={goToSearch}>
          <SearchIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};
