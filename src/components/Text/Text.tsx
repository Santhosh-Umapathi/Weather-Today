import {Text as RNText} from 'react-native';
import {TProps} from './types';
import {styles} from './styles';

export const Text = ({children, style, ...props}: TProps) => {
  return (
    <RNText style={[styles.default, style]} {...props}>
      {children}
    </RNText>
  );
};
