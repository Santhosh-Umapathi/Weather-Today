import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
import {colors} from '../../tokens';
const SvgClose = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 12 12"
    {...props}>
    <Path
      fill={props.color || colors.black}
      d="M6 6.7 3.55 9.15a.47.47 0 0 1-.35.137.47.47 0 0 1-.35-.137.47.47 0 0 1-.137-.35q0-.213.137-.35L5.3 6 2.85 3.55a.47.47 0 0 1-.137-.35q0-.212.137-.35a.47.47 0 0 1 .35-.138q.212 0 .35.138L6 5.3l2.45-2.45a.47.47 0 0 1 .35-.138q.212 0 .35.138a.47.47 0 0 1 .138.35.47.47 0 0 1-.138.35L6.7 6l2.45 2.45a.47.47 0 0 1 .138.35.47.47 0 0 1-.138.35.47.47 0 0 1-.35.137.47.47 0 0 1-.35-.137z"
    />
  </Svg>
);
export default SvgClose;
