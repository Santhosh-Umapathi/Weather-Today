import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
import {colors} from '../../tokens';
const SvgBack = (props: SvgProps) => (
  <Svg
    width={props.width || 30}
    height={props.height || 30}
    fill="none"
    viewBox="0 0 12 12"
    {...props}>
    <Path
      fill={props.color || colors.black}
      d="m5.4 6 1.95 1.95a.47.47 0 0 1 .138.35.47.47 0 0 1-.138.35.47.47 0 0 1-.35.137.47.47 0 0 1-.35-.137l-2.3-2.3a.44.44 0 0 1-.106-.162.57.57 0 0 1 0-.375.45.45 0 0 1 .106-.163l2.3-2.3A.47.47 0 0 1 7 3.212q.213 0 .35.138a.47.47 0 0 1 .138.35.47.47 0 0 1-.138.35z"
    />
  </Svg>
);
export default SvgBack;
