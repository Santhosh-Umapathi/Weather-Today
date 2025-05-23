import {StyleSheet} from 'react-native';
import {colors} from '../../../tokens';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  searchIcon: {position: 'absolute', left: 8},
  input: {
    marginHorizontal: 40,
    paddingVertical: 8,
  },
  closeIcon: {position: 'absolute', right: 8},
});
