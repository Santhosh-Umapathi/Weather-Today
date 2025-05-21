import * as React from 'react';
import Svg, {G, Path, Defs, RadialGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgCloudy = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 33 28"
    {...props}>
    <G filter="url(#Cloudy_svg__a)">
      <Path
        fill="none"
        d="M27.657 11q.01-.165.01-.333a5.667 5.667 0 0 0-9.557-4.121 6.2 6.2 0 0 0-1.61-.213 6.16 6.16 0 0 0-4.93 2.462A4.5 4.5 0 0 0 6 13.226a5.44 5.44 0 0 0 5.44 5.44H20A7.667 7.667 0 0 0 27.667 11z"
      />
      <Path
        fill="url(#Cloudy_svg__b)"
        fillOpacity={0.2}
        d="M27.657 11q.01-.165.01-.333a5.667 5.667 0 0 0-9.557-4.121 6.2 6.2 0 0 0-1.61-.213 6.16 6.16 0 0 0-4.93 2.462A4.5 4.5 0 0 0 6 13.226a5.44 5.44 0 0 0 5.44 5.44H20A7.667 7.667 0 0 0 27.667 11z"
      />
    </G>
    <Defs>
      <RadialGradient
        id="Cloudy_svg__b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-8.99986 14.50003 -22.9879 -14.2681 21.167 6.333)"
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgCloudy;
