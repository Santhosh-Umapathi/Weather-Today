import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Back} from '../icons';
import {useController} from './controller';

export const NavBackButton = () => {
  const {goBack} = useController();
  return (
    <TouchableOpacity style={styles.default} onPress={goBack}>
      <Back />
    </TouchableOpacity>
  );
};
