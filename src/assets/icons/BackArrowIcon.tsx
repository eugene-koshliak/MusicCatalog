import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const BackArrowIcon: FC<SvgProps> = ({...props}) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 19.5L7.5 12L15 4.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={'black'}
    />
  </Svg>
);

export default BackArrowIcon;
