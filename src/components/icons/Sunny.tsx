import * as React from 'react';
import Svg, {G, Circle, Defs, RadialGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgSunny = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <G filter="url(#Sunny_svg__a)">
      <Circle cx={12} cy={12} r={7} fill="#FBCA1C" />
      <Circle
        cx={12}
        cy={12}
        r={7}
        fill="url(#Sunny_svg__b)"
        fillOpacity={0.2}
      />
    </G>
    <Defs>
      <RadialGradient
        id="Sunny_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6 7.33332 -5.12302 4.19156 10.333 9.333)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FBCA1C" />
        <Stop offset={1} stopColor="#E4750E" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgSunny;
