import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgSearch = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 18 18"
    {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.6}
      d="m14.796 14.584 1.697 1.697m-3.89-3.465a6.5 6.5 0 1 1-9.192-9.193 6.5 6.5 0 0 1 9.193 9.193Z"
    />
  </Svg>
);
export default SvgSearch;
