import {StyleSheet} from 'react-native';
import {colors} from '../../../tokens';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 160,
    backgroundColor: colors.lightBg,
    borderRadius: 16,
  },
  handle: {
    height: 8,
    width: 32,
    backgroundColor: colors.black,
    position: 'absolute',
    top: -24,
    borderRadius: 8,
  },
  firstCard: {
    backgroundColor: colors.white,
  },
});
