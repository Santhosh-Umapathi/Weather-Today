import {TouchableOpacity} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {Text} from '../../Text';

export const SearchItem = ({name, onPress}: TProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};
