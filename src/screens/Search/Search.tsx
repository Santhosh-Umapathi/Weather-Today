import React from 'react';
import {View} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useController} from './controller';
import {AutoSuggestions, NavBackButton, SearchBar} from '../../components';
import {GRADIENT_CONFIG} from '../../config';
import {SearchList} from '../../components';

export const Search = ({}: TProps) => {
  const {
    gradientColors,
    paddingTop,
    showRecentSearches,
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
        <SearchBar {...{setShowRecentSearches}} />
      </View>
      <>
        <AutoSuggestions showRecentSearches={showRecentSearches} />
        <SearchList />
      </>
    </LinearGradient>
  );
};
