import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgBookmarkAdded = (props: SvgProps) => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 16 16"
    {...props}>
    <Path
      fill={props.color}
      d="m11.883 4.117 1.884-1.884a.65.65 0 0 1 .475-.2q.275 0 .475.2t.2.476a.64.64 0 0 1-.2.474l-2.367 2.35a.64.64 0 0 1-.467.2.64.64 0 0 1-.466-.2l-.95-.95a.62.62 0 0 1-.184-.458q0-.274.184-.475a.65.65 0 0 1 .475-.2q.276 0 .475.2zM8 12l-2.8 1.2q-.667.284-1.267-.108-.6-.39-.6-1.109v-8.65q0-.55.392-.941T4.667 2h3.75q.3 0 .45.267.15.265.016.55a2.7 2.7 0 0 0-.166.566q-.05.284-.05.617 0 1.2.758 2.117a3.25 3.25 0 0 0 1.908 1.15 3 3 0 0 0 .359.042q.159.008.308.008.283 0 .475.175a.57.57 0 0 1 .192.441v4.05q0 .717-.6 1.109-.6.391-1.267.108z"
    />
  </Svg>
);
export default SvgBookmarkAdded;
