import {FlatList} from 'react-native';
import {styles} from './styles';
import {SearchItem} from '../SearchItem';
import {useController} from './controller';

export const AutoSuggestions = () => {
  const {savedSearches, paddingBottom, setSearchText} = useController();

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
