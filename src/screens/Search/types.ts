import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TMainStackParamList} from '../../navigation/MainStack';
import {ROUTES} from '../../const';

export type TSearchScreenProps = NativeStackScreenProps<
  TMainStackParamList,
  typeof ROUTES.SEARCH
>;

export type TProps = {} & TSearchScreenProps;
