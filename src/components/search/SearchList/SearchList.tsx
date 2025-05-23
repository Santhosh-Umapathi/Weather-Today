import {FlatList} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {SearchItem} from '../SearchItem';
import {useController} from './controller';

export const SearchList = ({isInputFocused}: TProps) => {
  const {filteredCities, paddingBottom, goToSearchDetails} = useController();

  // Show only if Input is focused
  if (!isInputFocused) {
    return null;
  }
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
