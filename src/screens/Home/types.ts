import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TMainStackParamList} from '../../navigation/MainStack';
import {ROUTES} from '../../const';

export type THomeScreenProps = NativeStackScreenProps<
  TMainStackParamList,
  typeof ROUTES.HOME
>;

export type TProps = {} & THomeScreenProps;

export type TController = {};
