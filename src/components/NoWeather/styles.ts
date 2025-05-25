import {StyleSheet} from 'react-native';
import {colors} from '../../tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    gap: 10,
  },
  mainText: {fontSize: 20},
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
  },
  permissionContainer: {
    backgroundColor: colors.gray,
    padding: 8,
    borderRadius: 8,
  },
  text: {color: colors.white},
});
