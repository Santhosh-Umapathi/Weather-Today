import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgRain = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 22 22"
    {...props}>
    <G filter="url(#rain_svg__a)">
      <Path
        fill="#379ADC"
        d="M8.528 14.296a4.66 4.66 0 0 1 0-6.592L11 5.232l2.472 2.472a4.66 4.66 0 0 1 0 6.592 3.496 3.496 0 0 1-4.944 0"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgRain;
