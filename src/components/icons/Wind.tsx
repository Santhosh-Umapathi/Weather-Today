import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type {SvgProps} from 'react-native-svg';
const SvgWind = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 22 18"
    {...props}>
    <G fill="#C01B3C" filter="url(#wind_svg__a)">
      <Path d="M4.438 8.313a.438.438 0 0 0 0 .874h10.296a1.75 1.75 0 1 0 1.516-.875zM13.956 6.935c-.06.232.08.472.32.493a2.625 2.625 0 1 0-2.371-2.222c.036.237.285.362.512.287.228-.074.346-.32.33-.56a1.758 1.758 0 1 1 1.746 1.637c-.24-.001-.478.133-.537.365" />
      <Path d="M5.75 7c0-.242.196-.437.438-.437H14.5v.875H6.188A.437.437 0 0 1 5.75 7M6.625 10.5c0-.242.196-.437.438-.437h4.375a.438.438 0 0 1 0 .874H7.062a.44.44 0 0 1-.437-.437M9.688 5.688a1.312 1.312 0 1 0-1.238-.875H4.438a.438.438 0 0 0 0 .875z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgWind;
