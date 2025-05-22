import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgLocationAdd = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 14 16"
    {...props}>
    <Path
      fill={props.color || '#000'}
      d="M6.188 9.6h1.625V7.2h2.437V5.6H7.813V3.2H6.188v2.4H3.75v1.6h2.438zM7 13.88q2.478-2.24 3.677-4.07t1.198-3.25q0-2.18-1.411-3.57T7 1.6 3.537 2.99 2.125 6.56q0 1.42 1.198 3.25 1.2 1.83 3.677 4.07M7 16q-3.27-2.74-4.885-5.09T.5 6.56q0-3 1.96-4.78Q4.422 0 7 0q2.58 0 4.54 1.78 1.962 1.78 1.96 4.78 0 2-1.614 4.35T7 16"
    />
  </Svg>
);
export default SvgLocationAdd;
