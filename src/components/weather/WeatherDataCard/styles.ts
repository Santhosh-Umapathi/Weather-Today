import {StyleSheet} from 'react-native';
import {colors} from '../../../tokens';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightBg,
    padding: 16,
    borderRadius: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: colors.white,
    marginRight: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  iconComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
