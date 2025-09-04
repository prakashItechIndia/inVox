import ReactIconSingle from '../../assets/icons/nav-bar/Group 18.svg?react';
import ReactPasswordIcons from '../../assets/icons/password.svg?react';
import ReactLoginIcons from '../../assets/icons/login_logo.svg?react';

import { CustomSVGIconType } from '../../type';

export const ReactIconAuthBanner: CustomSVGIconType = ({ className }) => {
  return <ReactIconSingle className={className} />;
};

export const ReactPasswordIcon: CustomSVGIconType = ({ className }) => {
  return <ReactPasswordIcons className={className} />;
};

export const ReactLoginIcon: CustomSVGIconType = ({ className }) => {
  return <ReactLoginIcons className={className} />;
};

