import {TCoordinates} from '../../../dto';

export type TProps = TCoordinates & {isPrimary?: boolean};

export type TController = Omit<TProps, 'isPrimary'>;
