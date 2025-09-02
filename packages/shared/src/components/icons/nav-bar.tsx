import { CustomSVGIconType } from '../../type';
import ReactIconClose from "../../assets/icons/close.svg?react";
import ReactOrganisationMenuIcons from '../../assets/icons/nav-bar/Shape (2).svg?react';
import ReactHelpMenuIcons from '../../assets/icons/nav-bar/Shape (3).svg?react';
import ReactDashboardMenuIcons from '../../assets/icons/nav-bar/Shape.svg?react';
import ReactLogsMenuIcons from '../../assets/icons/nav-bar/Vector.svg?react';
import ReactClarifyMenuIcons from '../../assets/icons/nav-bar/clarify.svg?react';
import ReactInvoicesMenuIcons from '../../assets/icons/nav-bar/invoice.svg?react';
import ReactIconBulkUpload from '../../assets/icons/nav-bar/upload.svg?react';
import ReactIndexingIcons from '../../assets/icons/nav-bar/indexing.svg?react';
import ReactVerifyIcons from '../../assets/icons/nav-bar/verify.svg?react';
import ReactPremiumIcons from '../../assets/icons/Crown.svg?react';

export const ReactDashboardMenuIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactDashboardMenuIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactUserMenuIcon: CustomSVGIconType = ({ className, color }) => {
  return (
    <svg className={className} width="10" height="13" viewBox="0 0 10 13" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 7C9.32843 7 10 7.67157 10 8.5V9C10 10.9714 8.14049 13 5 13C1.85951 13 0 10.9714 0 9V8.5C0 7.67157 0.671573 7 1.5 7H8.5ZM8.5 8H1.5C1.22386 8 1 8.22386 1 8.5V9C1 10.4376 2.43216 12 5 12C7.56784 12 9 10.4376 9 9V8.5C9 8.22386 8.77614 8 8.5 8ZM5 0.5C6.51878 0.5 7.75 1.73122 7.75 3.25C7.75 4.76878 6.51878 6 5 6C3.48122 6 2.25 4.76878 2.25 3.25C2.25 1.73122 3.48122 0.5 5 0.5ZM5 1.5C4.0335 1.5 3.25 2.2835 3.25 3.25C3.25 4.2165 4.0335 5 5 5C5.9665 5 6.75 4.2165 6.75 3.25C6.75 2.2835 5.9665 1.5 5 1.5Z" fill={color} />
    </svg>
  );
};

export const ReactOrganisationMenuIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactOrganisationMenuIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactHelpMenuIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactHelpMenuIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactSettingsMenuIcon: CustomSVGIconType = ({ className, color = '#FFFFFF' }) => {

  return <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M5.99994 4C4.89537 4 3.99994 4.89543 3.99994 6C3.99994 7.10457 4.89537 8 5.99994 8C7.10451 8 7.99994 7.10457 7.99994 6C7.99994 4.89543 7.10451 4 5.99994 4ZM4.99994 6C4.99994 5.44772 5.44765 5 5.99994 5C6.55222 5 6.99994 5.44772 6.99994 6C6.99994 6.55228 6.55222 7 5.99994 7C5.44765 7 4.99994 6.55228 4.99994 6ZM8.61803 2.39833C8.23299 2.46825 7.86392 2.21413 7.7937 1.83074L7.53397 0.414957C7.50816 0.274269 7.39961 0.163011 7.25912 0.133254C6.84818 0.0462148 6.42685 0.00195312 6 0.00195312C5.57289 0.00195312 5.1513 0.0462687 4.74013 0.133413C4.5996 0.163196 4.49104 0.274525 4.46529 0.415267L4.20629 1.8308C4.1994 1.86844 4.18942 1.90551 4.17647 1.9416C4.04476 2.30859 3.6392 2.49978 3.27062 2.36863L1.91115 1.88463C1.77603 1.83652 1.62511 1.87431 1.52891 1.98033C0.960048 2.60729 0.528915 3.34708 0.267202 4.15302C0.22305 4.28899 0.265623 4.43805 0.375024 4.53053L1.47694 5.46206C1.50626 5.48685 1.53352 5.51399 1.55843 5.5432C1.81177 5.84027 1.77528 6.28558 1.47693 6.53783L0.375024 7.46935C0.265623 7.56183 0.22305 7.71089 0.267202 7.84685C0.528915 8.65279 0.960048 9.39259 1.52891 10.0196C1.62511 10.1256 1.77603 10.1634 1.91115 10.1153L3.27068 9.63123C3.30687 9.61835 3.3441 9.60842 3.38196 9.60154C3.76701 9.53162 4.13608 9.78575 4.2063 10.1691L4.46529 11.5846C4.49104 11.7254 4.5996 11.8367 4.74013 11.8665C5.1513 11.9536 5.57289 11.9979 6 11.9979C6.42685 11.9979 6.84818 11.9537 7.25912 11.8666C7.39961 11.8369 7.50816 11.7256 7.53397 11.5849L7.79368 10.1692C7.8006 10.1314 7.81058 10.0944 7.82353 10.0583C7.95524 9.69129 8.3608 9.5001 8.72938 9.63125L10.0888 10.1153C10.224 10.1634 10.3749 10.1256 10.4711 10.0196C11.04 9.39259 11.4711 8.65279 11.7328 7.84685C11.777 7.71089 11.7344 7.56183 11.625 7.46935L10.5231 6.53782C10.4937 6.51303 10.4665 6.48589 10.4416 6.45667C10.1882 6.1596 10.2247 5.71429 10.5231 5.46205L11.625 4.53053C11.7344 4.43805 11.777 4.28899 11.7328 4.15302C11.4711 3.34708 11.04 2.60729 10.4711 1.98033C10.3749 1.87431 10.224 1.83652 10.0888 1.88463L8.72932 2.36865C8.69313 2.38152 8.6559 2.39146 8.61803 2.39833ZM1.99863 2.97726L2.93522 3.3107C3.82017 3.62559 4.79872 3.16815 5.11769 2.2794C5.14903 2.19207 5.17324 2.1021 5.18996 2.01078L5.36738 1.04113C5.5757 1.01512 5.78684 1.00195 6 1.00195C6.213 1.00195 6.42397 1.0151 6.63214 1.04107L6.81011 2.01117C6.98053 2.9408 7.87266 3.55003 8.7967 3.38225C8.88773 3.36572 8.9775 3.34176 9.06472 3.31073L10.0014 2.97726C10.2564 3.31084 10.4684 3.67476 10.6319 4.06064L9.87743 4.6984C9.15657 5.30787 9.06746 6.38649 9.68067 7.10555C9.74083 7.17609 9.80668 7.24166 9.87746 7.3015L10.6319 7.93924C10.4684 8.32512 10.2564 8.68904 10.0014 9.02262L9.06461 8.68911C8.17966 8.37423 7.20128 8.83173 6.88231 9.72048C6.85096 9.80783 6.82677 9.89782 6.81004 9.98908L6.63214 10.9588C6.42397 10.9848 6.213 10.9979 6 10.9979C5.78684 10.9979 5.5757 10.9848 5.36738 10.9587L5.18994 9.98898C5.01965 9.0592 4.12743 8.44983 3.2033 8.61763C3.11227 8.63416 3.0225 8.65812 2.93528 8.68915L1.99863 9.02262C1.74357 8.68904 1.53161 8.32512 1.36814 7.93924L2.12257 7.30148C2.84343 6.69201 2.93254 5.61339 2.31933 4.89433C2.25917 4.82378 2.19332 4.75822 2.12254 4.69838L1.36814 4.06064C1.53161 3.67476 1.74357 3.31084 1.99863 2.97726Z" fill={color} />
  </svg>
};

export const ReactInvoicesMenuIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactInvoicesMenuIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactClarifyMenuIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactClarifyMenuIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactLogsMenuIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactLogsMenuIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactBulkUploadIcon: CustomSVGIconType = ({
  className,
  variant,
}) => {
  return (
    <ReactIconBulkUpload
      className={className}
      style={{ fill: variant === 'on' ? '#028FAB' : '#616D7A' }}
    />
  );
};

export const ReactCloseIcon: CustomSVGIconType = ({
  className,
  variant,
}) => {
  return (
    <ReactIconClose
      className={className}
      style={{ fill: variant === 'on' ? '#028FAB' : '#616D7A' }}
    />
  );
};


export const ReactIndexingIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactIndexingIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactVerifyIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactVerifyIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};

export const ReactPremiumIcon: CustomSVGIconType = ({ className, variant }) => {
  return (
    <ReactPremiumIcons
      className={className}
      style={{ fill: variant === 'on' ? '#FFFFFF' : '#FFFFFF' }}
    />
  );
};