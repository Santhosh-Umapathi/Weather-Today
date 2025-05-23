import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TMainStackParamList} from '../../navigation/MainStack';
import {ROUTES} from '../../const';

export type TSearchDetailsScreenProps = NativeStackScreenProps<
  TMainStackParamList,
  typeof ROUTES.SEARCH_DETAILS
>;

export type TProps = {} & TSearchDetailsScreenProps;
