import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useController} from './controller';
import {colors} from '../../tokens';
import {Back, Close, SearchIcon} from '../../components/icons';
import {CurrentWeather, MainWeather, SearchItem, Text} from '../../components';
import {useQuery} from '@tanstack/react-query';
import {generateWeatherQueryKey} from '../../helpers';
import {getFullWeather} from '../../api';

export const Search = (props: TProps) => {
  const {
    gradientColors,
    paddingBottom,
    paddingTop,
    clearSearch,
    searchLocation,
    goBack,
    locations,
    searchInputRef,
    isClearIconVisible,
    onChangeText,
    searchText,
    onFocus,
    onBlur,
    filteredCities,
    savedSearches,
    showRecentSearches,
  } = useController();
  return (
    <LinearGradient
      style={styles.container}
      colors={gradientColors}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.75, y: 1.0}}>
      <View style={[{paddingHorizontal: 24, paddingTop}]}>
        <TouchableOpacity
          style={{
            paddingRight: 10,
            paddingVertical: 10,
            width: '10%',
          }}
          onPress={goBack}>
          <Back />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: colors.white,
            justifyContent: 'center',
            borderRadius: 8,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 8}}
            onPress={searchLocation}>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            ref={searchInputRef}
            style={{
              marginHorizontal: 40,
              paddingVertical: 8,
            }}
            onChangeText={onChangeText}
            value={searchText}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {isClearIconVisible && (
            <TouchableOpacity
              style={{position: 'absolute', right: 8}}
              onPress={clearSearch}>
              <Close />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showRecentSearches ? (
        <FlatList
          keyExtractor={item => item.id}
          data={savedSearches}
          contentContainerStyle={[
            {paddingHorizontal: 24, paddingBottom, paddingTop: 20, gap: 8},
          ]}
          renderItem={({item}) => {
            return (
              <SearchItem
                {...{
                  name: item.search,
                  onPress: () => {
                    console.log('add to input and search the text');
                  },
                }}
              />
            );
          }}
        />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={filteredCities}
          contentContainerStyle={[
            {paddingHorizontal: 24, paddingBottom, paddingTop: 20, gap: 8},
          ]}
          renderItem={({item}) => {
            return (
              <SearchItem
                {...{
                  name: item.name,
                  onPress: () => {
                    console.log('go to search details');
                  },
                }}
              />
            );
          }}
        />
      )}

      {/* <FlatList
        keyExtractor={item => item.lat.toString()}
        data={locations}
        contentContainerStyle={[
          {paddingHorizontal: 24, paddingBottom, paddingTop: 20},
        ]}
        renderItem={({item, index}) => {
          return <SavedItem {...{lat: item.lat, lon: item.lon}} />;
        }}
      /> */}
    </LinearGradient>
  );
};

export const SavedItem = ({lat, lon}) => {
  const queryKey = generateWeatherQueryKey({lat, lon});

  const {data, isLoading, isError} = useQuery({
    enabled: !!(lat && lon),
    queryKey,
    queryFn: () => getFullWeather({lat, lon}),
  });

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Go to search details');
      }}
      style={{backgroundColor: colors.lightBg, borderRadius: 10, padding: 10}}>
      <MainWeather {...{name: data?.current.name}} canGoToSearch={false} />
      <CurrentWeather
        {...{
          id: data?.current.main.id,
          temperature: data?.current.main.temperature,
          weather: data?.current.main.weather,
          size: 130,
        }}
      />
    </TouchableOpacity>
  );
};
