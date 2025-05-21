import * as React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgPartialSun = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 33 31"
    {...props}>
    <G filter="url(#Partial_Sun_svg__a)">
      <Circle cx={14} cy={10} r={7} fill="#FBCA1C" />
      <Circle
        cx={14}
        cy={10}
        r={7}
        fill="url(#Partial_Sun_svg__b)"
        fillOpacity={0.2}
      />
    </G>
    <G filter="url(#Partial_Sun_svg__c)">
      <Path
        fill="none"
        d="M27.657 14.333q.01-.165.01-.333a5.667 5.667 0 0 0-9.557-4.121 6.2 6.2 0 0 0-1.61-.213 6.16 6.16 0 0 0-4.93 2.462A4.5 4.5 0 0 0 6 16.559a5.44 5.44 0 0 0 5.44 5.44H20a7.667 7.667 0 0 0 7.667-7.666z"
      />
      <Path
        fill="url(#Partial_Sun_svg__d)"
        fillOpacity={0.2}
        d="M27.657 14.333q.01-.165.01-.333a5.667 5.667 0 0 0-9.557-4.121 6.2 6.2 0 0 0-1.61-.213 6.16 6.16 0 0 0-4.93 2.462A4.5 4.5 0 0 0 6 16.559a5.44 5.44 0 0 0 5.44 5.44H20a7.667 7.667 0 0 0 7.667-7.666z"
      />
    </G>
    <Defs>
      <RadialGradient
        id="Partial_Sun_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6 7.33332 -5.12302 4.19156 12.333 7.333)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FBCA1C" />
        <Stop offset={1} stopColor="#E4750E" />
      </RadialGradient>
      <RadialGradient
        id="Partial_Sun_svg__d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-8.99986 14.50003 -22.9879 -14.2681 21.167 9.666)"
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgPartialSun;
