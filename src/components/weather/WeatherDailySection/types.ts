import {TCoordinates} from '../../../dto';

export type TProps = Partial<TCoordinates> & {
  city?: string;
  queryKey: string[];
};

export type TController = TProps;
