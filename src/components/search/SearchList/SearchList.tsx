import {FlatList} from 'react-native';
import {styles} from './styles';
import {SearchItem} from '../SearchItem';
import {useController} from './controller';

export const SearchList = () => {
  const {filteredCities, paddingBottom, goToSearchDetails} = useController();

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={filteredCities}
      contentContainerStyle={[styles.container, {paddingBottom}]}
      keyboardShouldPersistTaps="handled"
      renderItem={({item}) => (
        <SearchItem
          {...{
            name: item.name,
            onPress: () => goToSearchDetails(item.name),
          }}
        />
      )}
    />
  );
};
