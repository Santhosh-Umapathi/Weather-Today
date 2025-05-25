import {TextInput, TouchableOpacity, View} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {Close, SearchIcon} from '../../icons';
import {useController} from './controller';

export const SearchBar = ({setShowRecentSearches}: TProps) => {
  const {
    searchText,
    isClearIconVisible,
    searchLocation,
    onChangeText,
    onFocus,
    onBlur,
    clearSearch,
    searchInputRef,
  } = useController({setShowRecentSearches});
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={searchLocation}
        testID="search-icon">
        <SearchIcon />
      </TouchableOpacity>
      <TextInput
        ref={searchInputRef}
        style={styles.input}
        onChangeText={onChangeText}
        value={searchText}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isClearIconVisible && (
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={clearSearch}
          testID="close-icon">
          <Close />
        </TouchableOpacity>
      )}
    </View>
  );
};
