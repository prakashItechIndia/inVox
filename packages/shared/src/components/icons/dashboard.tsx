import ReactArrowUpIcons from '../../assets/icons/Arrow Up Exclamation.svg?react';
import ReactCutIcons from '../../assets/icons/Cut.svg?react';
import ReactHourLoadingIcons from '../../assets/icons/Hourglass Half.svg?react';
import ReactRadarIcons from '../../assets/icons/Radar.svg?react';
import ReactDoccTextIcons from '../../assets/icons/Document Text Extract.svg?react';

import { CustomSVGIconType } from '../../type';

export const ReactDoccTextIcon: CustomSVGIconType = ({ className, variant }) => {
  return <ReactDoccTextIcons className={className}
    style={{ fill: variant === 'on' ? 'text-green-500' : 'text-red-500' }}
  />;
};

export const ReactCutIcon: CustomSVGIconType = ({ className, variant }) => {
  return <ReactCutIcons className={className}
    style={{ fill: variant === 'on' ? 'text-green-500' : 'text-red-500' }}
  />;
};

export const ReactRadarIcon: CustomSVGIconType = ({ className, variant }) => {
  return <ReactRadarIcons className={className}
    style={{ fill: variant === 'on' ? 'text-green-500' : 'text-red-500' }}
  />;
};

export const ReactArrowUpIcon: CustomSVGIconType = ({ className, variant }) => {
  return <ReactArrowUpIcons className={className}
    style={{ fill: variant === 'on' ? 'text-green-500' : 'text-red-500' }}
  />;
};

export const ReactHourLoadingIcon: CustomSVGIconType = ({ className, variant }) => {
  return <ReactHourLoadingIcons className={className}
    style={{ fill: variant === 'on' ? 'text-green-500' : 'text-red-500' }}
  />;
};
