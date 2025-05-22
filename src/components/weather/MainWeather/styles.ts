import {StyleSheet} from 'react-native';
import {colors} from '../../../tokens';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  name: {fontSize: 28},
  date: {
    color: colors.gray,
    marginTop: 6,
  },
});
