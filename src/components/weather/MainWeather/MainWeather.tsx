import {TouchableOpacity, View} from 'react-native';
import {TProps} from './types';
import {Text} from '../../Text';
import {styles} from './styles';
import {
  BookmarkAdd,
  BookmarkAdded,
  LocationAdd,
  StarFilled,
  StarOutline,
} from '../../icons';
import {useController} from './controller';

export const MainWeather = ({name, canGoToSearch, showActions}: TProps) => {
  const {
    date,
    goToSearch,
    updateBookmarkLocation,
    updatePrimaryLocation,
    isBookmarked,
    isPrimary,
  } = useController({});
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
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={updatePrimaryLocation}>
            {isPrimary ? (
              <StarFilled width={34} height={34} />
            ) : (
              <StarOutline width={34} height={34} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={updateBookmarkLocation}>
            {isBookmarked ? (
              <BookmarkAdded width={34} height={34} />
            ) : (
              <BookmarkAdd width={34} height={34} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
