import * as React from 'react';
import Svg, {G, Mask, Path, Defs, ClipPath} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgClose = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <G clipPath="url(#close_svg__a)">
      <Mask
        id="close_svg__b"
        width={16}
        height={16}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}>
        <Path fill="none" d="M0 0h16v16H0z" />
      </Mask>
      <G mask="url(#close_svg__b)">
        <Path
          fill={props.color}
          d="M12.2 3.807a.663.663 0 0 0-.94 0L8 7.06 4.74 3.8a.665.665 0 0 0-.94.94L7.06 8 3.8 11.26a.665.665 0 1 0 .94.94L8 8.94l3.26 3.26a.664.664 0 1 0 .94-.94L8.94 8l3.26-3.26a.67.67 0 0 0 0-.933"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="close_svg__a">
        <Path fill="none" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgClose;
