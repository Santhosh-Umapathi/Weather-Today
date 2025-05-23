import {TouchableOpacity, View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {styles} from './styles';
import {BookmarkAdd, LocationAdd, StarOutline} from '../../icons';
import {useController} from './controller';

export const MainWeather = ({name, canGoToSearch, showActions}: TProps) => {
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
      {showActions && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}>
          <TouchableOpacity onPress={goToSearch}>
            <StarOutline width={34} height={34} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToSearch}>
            <BookmarkAdd width={34} height={34} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
