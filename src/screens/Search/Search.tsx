import React from 'react';
import {View} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useController} from './controller';

import {
  AutoSuggestions,
  NavBackButton,
  SavedList,
  SearchBar,
} from '../../components';
import {GRADIENT_CONFIG} from '../../config';
import {SearchList} from '../../components';

export const Search = (props: TProps) => {
  const {
    gradientColors,
    paddingTop,
    setIsInputFocused,
    showRecentSearches,
    isInputFocused,
    setShowRecentSearches,
  } = useController();
  return (
    <LinearGradient
      style={styles.container}
      colors={gradientColors}
      start={GRADIENT_CONFIG.start}
      end={GRADIENT_CONFIG.end}>
      <View style={[styles.searchContainer, {paddingTop}]}>
        <NavBackButton />
        <SearchBar
          {...{isInputFocused, setIsInputFocused, setShowRecentSearches}}
        />
      </View>
      <>
        <AutoSuggestions showRecentSearches={showRecentSearches} />
        <SearchList isInputFocused={isInputFocused} />
        <SavedList isInputFocused={isInputFocused} />
      </>
    </LinearGradient>
  );
};
