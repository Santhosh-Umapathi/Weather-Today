import {FlatList} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {SearchItem} from '../SearchItem';
import {useController} from './controller';

export const AutoSuggestions = ({showRecentSearches}: TProps) => {
  const {savedSearches, paddingBottom, setSearchText} = useController();

  // Show only if Input is focused
  if (!showRecentSearches) {
    return null;
  }
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={savedSearches}
      contentContainerStyle={[styles.container, {paddingBottom}]}
      keyboardShouldPersistTaps="handled"
      renderItem={({item}) => (
        <SearchItem
          {...{
            name: item.search,
            onPress: () => setSearchText(item.search),
          }}
        />
      )}
    />
  );
};
