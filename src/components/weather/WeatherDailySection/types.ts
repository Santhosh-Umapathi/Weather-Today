import {TCoordinates} from '../../../dto';

export type TProps = Partial<TCoordinates> & {
  city?: string;
};

export type TController = TProps;
