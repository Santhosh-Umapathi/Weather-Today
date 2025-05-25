import {FlatList, View} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';
import {useController} from './controller';
import {SavedItem} from '../SavedItem';

export const SavedList = ({isInputFocused}: TProps) => {
  const {locations, paddingBottom, listStyle} = useController({isInputFocused});

  return (
    <View style={[styles.listStyle, {paddingBottom}]}>
      <FlatList
        keyExtractor={item => item.lat.toString()}
        data={locations}
        contentContainerStyle={[styles.container]}
        style={[listStyle]}
        renderItem={({item}) => (
          <SavedItem
            {...{lat: item.lat, lon: item.lon, isPrimary: item.isPrimary}}
          />
        )}
      />
    </View>
  );
};
