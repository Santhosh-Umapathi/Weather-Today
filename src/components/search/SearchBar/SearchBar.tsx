import {TextInput, TouchableOpacity, View} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {Close, SearchIcon} from '../../icons';
import {useController} from './controller';

export const SearchBar = ({
  isInputFocused,
  setIsInputFocused,
  setShowRecentSearches,
}: TProps) => {
  const {
    searchText,
    isClearIconVisible,
    searchLocation,
    onChangeText,
    onFocus,
    onBlur,
    clearSearch,
    searchInputRef,
  } = useController({isInputFocused, setIsInputFocused, setShowRecentSearches});
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchIcon} onPress={searchLocation}>
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
        <TouchableOpacity style={styles.closeIcon} onPress={clearSearch}>
          <Close />
        </TouchableOpacity>
      )}
    </View>
  );
};
