import * as React from 'react';
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgPartialSunnyRain = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 42 42"
    {...props}>
    <G filter="url(#Partial_Sunny_Rain_svg__a)">
      <G filter="url(#Partial_Sunny_Rain_svg__b)">
        <Path
          fill="#379ADC"
          d="M24.325 25.754c0-.456.37-.826.826-.826h.62v.62c0 .456-.37.826-.826.826a.62.62 0 0 1-.62-.62"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__c)">
        <Path
          fill="#379ADC"
          d="M21.434 29.224c0-.457.37-.826.826-.826h.62v.62c0 .455-.37.825-.827.825a.62.62 0 0 1-.62-.62"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__d)">
        <Path
          fill="#379ADC"
          d="M18.831 25.754c0-.456.37-.826.826-.826h.62v.62c0 .456-.37.826-.826.826a.62.62 0 0 1-.62-.62"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__e)">
        <Path
          fill="#379ADC"
          d="M15.94 29.224c0-.457.37-.826.826-.826h.62v.62c0 .455-.37.825-.827.825a.62.62 0 0 1-.62-.62"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__f)">
        <Path
          fill="#379ADC"
          d="M13.337 25.754c0-.456.37-.826.827-.826h.62v.62c0 .456-.37.826-.827.826a.62.62 0 0 1-.62-.62"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__g)">
        <Circle cx={17.675} cy={13.072} r={6.072} fill="#FBCA1C" />
        <Circle
          cx={17.675}
          cy={13.072}
          r={6.072}
          fill="url(#Partial_Sunny_Rain_svg__h)"
          fillOpacity={0.2}
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__i)">
        <Path
          fill="none"
          d="M29.522 16.83a4.916 4.916 0 0 0-8.281-3.864 5.36 5.36 0 0 0-5.674 1.952 3.904 3.904 0 0 0-4.832 3.793v.05a4.72 4.72 0 0 0 4.72 4.72h7.425a6.65 6.65 0 0 0 6.65-6.65z"
        />
        <Path
          fill="url(#Partial_Sunny_Rain_svg__j)"
          fillOpacity={0.2}
          d="M29.522 16.83a4.916 4.916 0 0 0-8.281-3.864 5.36 5.36 0 0 0-5.674 1.952 3.904 3.904 0 0 0-4.832 3.793v.05a4.72 4.72 0 0 0 4.72 4.72h7.425a6.65 6.65 0 0 0 6.65-6.65z"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__k)">
        <Path
          fill="none"
          d="M24.615 18.133a4.193 4.193 0 0 1 4.192-4.193h.723a3.47 3.47 0 1 1 0 6.94h-2.602a2.313 2.313 0 0 1-2.314-2.313z"
        />
        <Path
          fill="url(#Partial_Sunny_Rain_svg__l)"
          fillOpacity={0.2}
          d="M24.615 18.133a4.193 4.193 0 0 1 4.192-4.193h.723a3.47 3.47 0 1 1 0 6.94h-2.602a2.313 2.313 0 0 1-2.314-2.313z"
        />
      </G>
      <G filter="url(#Partial_Sunny_Rain_svg__m)">
        <Path
          fill="none"
          d="M14.783 20.88a2.89 2.89 0 0 0-2.891-2.892h-.434a2.458 2.458 0 0 0 0 4.916h1.687c.905 0 1.638-.734 1.638-1.639z"
        />
        <Path
          fill="url(#Partial_Sunny_Rain_svg__n)"
          fillOpacity={0.2}
          d="M14.783 20.88a2.89 2.89 0 0 0-2.891-2.892h-.434a2.458 2.458 0 0 0 0 4.916h1.687c.905 0 1.638-.734 1.638-1.639z"
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="Partial_Sunny_Rain_svg__h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(5.20482 6.36145 -4.44407 3.63606 16.229 10.759)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FBCA1C" />
        <Stop offset={1} stopColor="#E4750E" />
      </RadialGradient>
      <RadialGradient
        id="Partial_Sunny_Rain_svg__j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-7.80714 12.57839 -19.94132 -12.37716 23.892 12.783)"
        gradientUnits="userSpaceOnUse">
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" />
      </RadialGradient>
      <RadialGradient
        id="Partial_Sunny_Rain_svg__l"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(49.538 -.172 31.101)scale(12.9218 8.74024)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#4D5E6F" stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" stopOpacity={0.54} />
      </RadialGradient>
      <RadialGradient
        id="Partial_Sunny_Rain_svg__n"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 6.6506 -7.82424 0 11.892 16.832)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#4D5E6F" stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" stopOpacity={0.62} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SvgPartialSunnyRain;
