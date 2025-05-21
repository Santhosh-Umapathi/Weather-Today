import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgBookmarkAdd = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={props.color}
      d="m12 16-2.8 1.2q-.667.284-1.267-.108-.6-.39-.6-1.109v-8.65q0-.55.392-.941T8.667 6H12q.283 0 .475.192a.64.64 0 0 1 .192.475.65.65 0 0 1-.667.666H8.667v8.634L12 14.533l3.333 1.434V12q0-.283.192-.475a.65.65 0 0 1 .475-.192q.282 0 .475.192a.64.64 0 0 1 .192.475v3.983q0 .717-.6 1.109T14.8 17.2zm0-8.667H8.667h4zm3.333 1.334h-.666a.64.64 0 0 1-.475-.192A.65.65 0 0 1 14 8q0-.282.192-.475a.65.65 0 0 1 .475-.192h.666v-.666q0-.284.192-.475A.65.65 0 0 1 16 6q.282 0 .475.192a.64.64 0 0 1 .192.475v.666h.666q.285 0 .476.192a.64.64 0 0 1 .19.475.65.65 0 0 1-.191.475.64.64 0 0 1-.475.192h-.666v.666a.65.65 0 0 1-.192.476A.64.64 0 0 1 16 10a.65.65 0 0 1-.475-.192.64.64 0 0 1-.192-.475z"
    />
  </Svg>
);
export default SvgBookmarkAdd;
