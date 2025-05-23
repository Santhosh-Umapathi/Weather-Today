import {FlatList} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {useController} from './controller';
import {SavedItem} from '../SavedItem';

export const SavedList = ({isInputFocused}: TProps) => {
  const {locations, paddingBottom, listStyle} = useController({isInputFocused});

  return (
    <FlatList
      keyExtractor={item => item.lat.toString()}
      data={locations}
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom,
        },
      ]}
      style={[styles.listStyle, listStyle]}
      renderItem={({item}) => (
        <SavedItem
          {...{lat: item.lat, lon: item.lon, isPrimary: item.isPrimary}}
        />
      )}
    />
  );
};
