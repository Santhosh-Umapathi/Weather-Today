import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
import {colors} from '../../tokens';
const SvgStarFilled = (props: SvgProps) => (
  <Svg
    width={props.width || 30}
    height={props.height || 30}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={props.color || colors.black}
      d="M9.083 8.267 10.95 5.85q.2-.267.475-.391a1.39 1.39 0 0 1 1.15 0q.277.126.475.391l1.867 2.417 2.833.95q.434.134.683.492.25.359.25.791 0 .2-.058.4-.06.2-.192.383l-1.833 2.6.067 2.734q.016.583-.384.983a1.28 1.28 0 0 1-.933.4q-.033 0-.367-.05L12 17.117l-2.983.833a.6.6 0 0 1-.184.042A2 2 0 0 1 8.65 18a1.28 1.28 0 0 1-.933-.4 1.28 1.28 0 0 1-.384-.983l.067-2.75-1.817-2.584a1.3 1.3 0 0 1-.192-.383 1.4 1.4 0 0 1-.058-.4 1.36 1.36 0 0 1 .917-1.283z"
    />
  </Svg>
);
export default SvgStarFilled;
