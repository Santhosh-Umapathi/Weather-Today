import {StyleSheet} from 'react-native';
import {colors} from '../../../tokens';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
  },
  divider: {
    height: 0.5,
    width: '100%',
    marginHorizontal: 24,
    marginTop: 20,
    backgroundColor: colors.gray,
  },
  scrollViewStyle: {overflow: 'visible'},
  scrollViewContentContainerStyle: {
    gap: 20,
    marginTop: 20,
    paddingHorizontal: 24,
  },
});
